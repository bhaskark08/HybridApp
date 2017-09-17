jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Category

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/bhaskar/in/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/bhaskar/in/test/integration/pages/App",
	"com/bhaskar/in/test/integration/pages/Browser",
	"com/bhaskar/in/test/integration/pages/Master",
	"com/bhaskar/in/test/integration/pages/Detail",
	"com/bhaskar/in/test/integration/pages/Create",
	"com/bhaskar/in/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.bhaskar.in.view."
	});

	sap.ui.require([
		"com/bhaskar/in/test/integration/MasterJourney",
		"com/bhaskar/in/test/integration/NavigationJourney",
		"com/bhaskar/in/test/integration/NotFoundJourney",
		"com/bhaskar/in/test/integration/BusyJourney",
		"com/bhaskar/in/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});