public with sharing class PDFGeneratorController {
    @AuraEnabled
	public static List<Contact> getContacts(){
		return [SELECT Id, FirstName, LastName FROM Contact LIMIT 1000];
	}
}