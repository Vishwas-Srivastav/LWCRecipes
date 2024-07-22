/**
 * @description Apex controller for Case data operations used by Timeline, Accordion, and Continuation recipes.
 * @author Vishwas Srivastav
 * @group LWC Recipes
**/
public with sharing class CaseController {

    @AuraEnabled(cacheable=true)
    public static List<Case> getRecentCases() {
        return [
            SELECT Id, CaseNumber, Subject, Status, Priority, Type, CreatedDate, Account.Name
            FROM Case
            WITH SECURITY_ENFORCED
            ORDER BY CreatedDate DESC
            LIMIT 25
        ];
    }
}
