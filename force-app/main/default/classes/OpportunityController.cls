/**
 * @description Apex controller for Opportunity data operations used by LWC Kanban, Inline Edit, and Metric Card recipes.
 * @author Vishwas Srivastav
 * @group LWC Recipes
 **/
public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities() {
        return [
            SELECT Id, Name, StageName, Amount, CloseDate, Account.Name, Probability
            FROM Opportunity
            WITH SECURITY_ENFORCED
            ORDER BY CloseDate DESC
            LIMIT 50
        ];
    }

    @AuraEnabled
    public static void updateStage(Id opportunityId, String newStage) {
        Opportunity opp = new Opportunity(Id = opportunityId, StageName = newStage);
        update as user opp;
    }

    @AuraEnabled
    public static void updateOpportunities(List<Opportunity> opportunitiesToUpdate) {
        update as user opportunitiesToUpdate;
    }
}
