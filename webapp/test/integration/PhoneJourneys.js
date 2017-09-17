jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/bhaskar/in/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/bhaskar/in/test/integration/pages/App",
	"com/bhaskar/in/test/integration/pages/Browser",
	"com/bhaskar/in/test/integration/pages/Master",
	"com/bhaskar/in/test/integration/pages/Detail",
	"com/bhaskar/in/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.bhaskar.in.view."
	});

	sap.ui.require([
		"com/bhaskar/in/test/integration/NavigationJourneyPhone",
		"com/bhaskar/in/test/integration/NotFoundJourneyPhone",
		"com/bhaskar/in/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});