/**
 * @description       : Apex controller for account data operations used by LWC recipes.
 *                      Demonstrates cacheable Apex queries for @wire and imperative Apex calls.
 * @author            : Vishwas Srivastav
 * @group             : LWC Recipes
**/
public with sharing class AccountController {

    /**
     * @description Fetches a list of Accounts with optional limit and offset for pagination.
     * @param pageSize Number of records to return.
     * @param pageNumber Current page index (1-based).
     * @return List of Account records.
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Integer pageSize, Integer pageNumber) {
        Integer offset = (pageNumber - 1) * pageSize;
        return [
            SELECT Id, Name, Industry, AnnualRevenue, Phone, Rating, CreatedDate
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC
            LIMIT :pageSize
            OFFSET :offset
        ];
    }

    /**
     * @description Returns total count of Accounts for pagination calculation.
     * @return Integer total account count.
     */
    @AuraEnabled(cacheable=true)
    public static Integer getAccountCount() {
        return [SELECT COUNT() FROM Account WITH SECURITY_ENFORCED];
    }

    /**
     * @description Dynamic search query for Accounts by Name or Industry.
     * @param searchKey The search term entered by the user.
     * @return List of matching Account records.
     */
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchKey) {
        if (String.isBlank(searchKey)) {
            return getAccounts(10, 1);
        }
        String key = '%' + String.escapeSingleQuotes(searchKey) + '%';
        return [
            SELECT Id, Name, Industry, AnnualRevenue, Phone, Rating
            FROM Account
            WHERE Name LIKE :key OR Industry LIKE :key
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC
            LIMIT 50
        ];
    }
}
