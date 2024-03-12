/**
 * @description       : Apex controller for Contact search and dynamic query recipes.
 * @author            : Vishwas Srivastav
 * @group             : LWC Recipes
**/
public with sharing class ContactController {

    /**
     * @description Imperatively searches contacts matching a search string.
     * @param searchKey The search term.
     * @return List of matching Contact records.
     */
    @AuraEnabled(cacheable=true)
    public static List<Contact> searchContacts(String searchKey) {
        if (String.isBlank(searchKey)) {
            return new List<Contact>();
        }
        String key = '%' + String.escapeSingleQuotes(searchKey) + '%';
        return [
            SELECT Id, Name, Title, Email, Phone, Account.Name
            FROM Contact
            WHERE Name LIKE :key OR Email LIKE :key OR Title LIKE :key
            WITH SECURITY_ENFORCED
            ORDER BY Name ASC
            LIMIT 25
        ];
    }
}
