public with sharing class lwcSortingDataTableCtrl {


    @AuraEnabled(Cacheable = true)
    public static List<Account> sortAccountList(){
        List<Account> accListObj= [SELECT Id, Name, Phone, Industry, Description, Type, Website FROM Account Where Phone != null limit 20 ];
        return accListObj;
    }
}