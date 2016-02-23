//Crm Helper Functions

includeJs("//code.jquery.com/jquery-1.11.2.min.js");
includeJs("//code.jquery.com/jquery-migrate-1.2.1.min.js");　

//GetServerUrl
function GetServerUrl() {
    return Xrm.Page.context.getClientUrl();
}　　

//Get Logged in user guid
function GetUserId() {
    return Xrm.Page.context.getUserId();
}

//Get Logged in User Name
function GetUserName() {
    return Xrm.Page.context.getUserName();
}

//Collapse Tabs
function CollapseTabs(tabs) {
    for (var i = 0; i < tabs.length; i++) {
        Xrm.Page.ui.tabs.get(tabs[i]).setDisplayState('collapsed');
        //Xrm.Page.ui.tabs.get("tabname").setDisplayState('collapsed');
    }
}

//Save entity
function SaveEntity(saveType) {
    if (saveType == null) {
        Xrm.Page.data.entity.save();
    } else if (saveType == "saveandclose") {
        Xrm.Page.data.entity.save("saveandclose");
    } else if (saveType == "saveandnew") {
        Xrm.Page.data.entity.save("saveandnew");
    }
}

//Show or Hide section according to the name of section
function ShowHideSection(sectionName, sectionIsVisible) {
    //Hide or Show Sections 
    var tabs = Xrm.Page.ui.tabs.get();
    for (var i in tabs) {
        var tab = tabs[i];
        tab.sections.forEach(function(section, index) {
            if (section.getName() == sectionName) {
                section.setVisible(sectionIsVisible);
            }
        });
    }
}

//Hide tab according ro tab id
function HideTab(tabId) {
    Xrm.Page.ui.tabs.get(tabId).setVisible(false);
}

//Show tab according ro tab id
function ShowTab(tabId) {
    Xrm.Page.ui.tabs.get(tabId).setVisible(true);
}

//Get current entity id
function GetEntityId() {
    return Xrm.Page.data.entity.getId();
}

//Get current entity name
function GetEntityLocigalName() {
    return Xrm.Page.data.entity.getEntityName();
}

//Focus on given control
function FocusControl(field) {
    Xrm.Page.ui.controls.get(field).setFocus();
}
//Fire onChange event of given field
function FireOnChange(field) {
    Xrm.Page.getAttribute(field).fireOnChange();
}

//Show notification
function ShowNotification(message, type) {
    Xrm.Page.ui.setFormNotification(message, type);
}

//Get form type ( create, update, ...)
function GetFormType() {
    return Xrm.Page.ui.getFormType();
}

// Set lookup field
function SetLookupField(fieldName, entityId, recordName, EntityLogicalName) {
    var lookup = new Array();
    lookup[0] = new Object();
    lookup[0].id = entityId;
    lookup[0].name = recordName;
    lookup[0].entityType = EntityLogicalName;
    Xrm.Page.getAttribute(fieldName).setValue(lookup);
}

//Get id of lookup field
function GetLookUpGuid(attributeDataValue) {
    if (attributeDataValue != null) {
        var attributeLookup = new Array;
        attributeLookup = attributeDataValue;
        if (null != attributeLookup) {
            var attributeGuid = attributeLookup[0].id;
            attributeGuid = attributeGuid.replace("{", "");
            attributeGuid = attributeGuid.replace("}", "");
            return attributeGuid;
        }
    }
    return null;
}

//Get entity type of lookup field ( account, contact, ...)
function GetLookUpEntityType(attributeDataValue) {
    if (attributeDataValue != null) {
        var attributeLookup = new Array;
        attributeLookup = attributeDataValue;
        if (null != attributeLookup) {
            return attributeLookup[0].entityType;
        }
    }
    return null;
}

//Get name of lookup field
function GetLookUpName(attributeDataValue) {
    if (attributeDataValue != null) {
        var attributeLookup = new Array;
        attributeLookup = attributeDataValue;
        if (null != attributeLookup) {
            return attributeLookup[0].name;
        }
    }
    return null;
}

//Get value of a field
function GetFieldValue(field) {
    return Xrm.Page.getAttribute(field).getValue();
}

//Set value of a field
function SetFieldValue(field, value) {
    Xrm.Page.getAttribute(field).setValue(value);
}

//Disable multiple fields on the form
function SetFieldDisabled(fields) {
    for (i = 0; i < fields.length; i++) {
        if (Xrm.Page.ui.controls.get(fields[i]) != null) {
            Xrm.Page.ui.controls.get(fields[i]).setDisabled(true);
        }
    }
}

//Enable multiple fields on the form
function SetFieldEnabled(fields) {
    for (i = 0; i < fields.length; i++) {
        if (Xrm.Page.ui.controls.get(fields[i]) != null) {
            Xrm.Page.ui.controls.get(fields[i]).setDisabled(false);
        }
    }
}

//Make multiple fields required on the form
function SetFieldRequired(fields) {
    for (i = 0; i < fields.length; i++) {
        if (Xrm.Page.ui.controls.get(fields[i]) != null) {
            Xrm.Page.getAttribute(fields[i]).setRequiredLevel("required");
        }
    }
}

//Make multiple fields non-required on the form
function SetFieldReqNone(fields) {
    for (i = 0; i < fields.length; i++) {
        if (Xrm.Page.ui.controls.get(fields[i]) != null) {
            Xrm.Page.getAttribute(fields[i]).setRequiredLevel("none");
        }
    }
}

//Set submit mode of a field as Always
function SetSubmitMode(field) {
    Xrm.Page.getAttribute(field).setSubmitMode("always");
}

//Show multiple fields on the form
function SetFieldVisible(fields) {
    for (i = 0; i < fields.length; i++) {
        if (Xrm.Page.ui.controls.get(fields[i]) != null) {
            Xrm.Page.ui.controls.get(fields[i]).setVisible(true);
        }
    }
}

//Hide multiple fields on the form
function SetFieldInvisible(fields) {
    for (i = 0; i < fields.length; i++) {
        if (Xrm.Page.ui.controls.get(fields[i]) != null) {
            Xrm.Page.ui.controls.get(fields[i]).setVisible(false);
        }
    }
}

//Check if a value is numeric
function isNumeric(value) {
    if (value != null) {
        var pattern = new RegExp(/\b\d+\b/);
        var pattern2 = new RegExp(/\W+/); //Alphanumeric
        var numbervar2 = pattern2.exec(value);
        var numbervar = pattern.exec(value);
        if (numbervar == null || numbervar2 != null) {
            return false;
        }
    }
    return true;
}

//Check if a value is Char
function isChar(value) {
    if (value != null) {
        var patt1 = new RegExp("[0-9]");
        if (!patt1.test(value)) {
            return true;
        }
        return false;
    }
}

//Retrieve OData results from a OData query
function retrieveOdataResults(query, isArray) {
    debugger;
    query = replaceTurkishCharsForOdata(query);
    var serverUrl = Xrm.Page.context.getClientUrl();
    var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc";
    var odataSelect = serverUrl + ODATA_ENDPOINT + "/" + query;
    var myArray = [];
    var record;
    myArray.length = 0;
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: odataSelect,
        async: false,
        beforeSend: function(XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
        },
        success: function(data, textStatus, XmlHttpRequest) {
            //debugger;
            if (data.d != null || data.d.results.length > 0) {
                if (isArray == false) {
                    record = data.d;
                } else if (data.d.results.length >= 1 && isArray == true) {
                    myArray = data.d.results;
                }　
            }
        },
        error: function(XmlHttpRequest, textStatus, errorThrown) {
            alert('OData Select Failed: ' + odataSelect);
        }
    });
    if (isArray == true) {
        return myArray;
    } else {
        return record;
    }
}

//Replace Turkish specific characters for OData query
function replaceTurkishCharsForOdata(temp) {
    debugger;　
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == 'ç') {
            temp = temp.replace("ç", "%C3%A7");
        } else if (temp[i] == 'Ç') {
            temp = temp.replace("Ç", "%C3%87");
        } else if (temp[i] == 'ğ') {
            temp = temp.replace("ğ", "%C4%9F");
        } else if (temp[i] == 'Ğ') {
            temp = temp.replace("Ğ", "%C4%9E");
        } else if (temp[i] == 'ı') {
            temp = temp.replace("ı", "%C4%B1");
        } else if (temp[i] == 'İ') {
            temp = temp.replace("İ", "%C4%B0");
        } else if (temp[i] == 'ö') {
            temp = temp.replace("ö", "%C3%B6");
        } else if (temp[i] == 'Ö') {
            temp = temp.replace("Ö", "%C3%96");
        } else if (temp[i] == 'ş') {
            temp = temp.replace("ş", "%C5%9F");
        } else if (temp[i] == 'Ş') {
            temp = temp.replace("Ş", "%C5%9E");
        } else if (temp[i] == 'ü') {
            temp = temp.replace("ü", "%C3%BC");
        } else if (temp[i] == 'Ü') {
            temp = temp.replace("Ü", "%C3%9C");
        }
    }
    return temp;
}

//Check if a control has an attribute
function doesControlHaveAttribute(control) {
    var controlType = control.getControlType();
    return controlType != "iframe" && controlType != "webresource" && controlType != "subgrid";
}

//Disable form fields
function disableFormFields(onOff) {
    Xrm.Page.ui.controls.forEach(function(control, index) {
        if (doesControlHaveAttribute(control)) {
            control.setDisabled(onOff);
        }
    });
}　

//Get Ajax data
function GetAjaxData(url, data) {
    var result = null;
    $.support.cors = true;
    $.ajax({
        type: "POST",
        async: false,
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        dataFilter: function(data) {
            var msg = eval('(' + data + ')');
            if (msg.hasOwnProperty('d'))
                return msg.d;
            else return msg;
        },
        success: function(msg) {
            result = msg;
        },
        error: function(request, status, error) {
            alert(request.responseText);
        }
    });
    return result;
}　

//Include a javascript file from a URL
function includeJs(jsFilePath) {
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = jsFilePath;
    document.body.appendChild(js);
}

//Populate all required fields on the form (wit max or min values)
function PopulateAllRequiredFields(isMax) {
	var attrs = Xrm.Page.data.entity.attributes.get();
	for (var i in attrs) {
		var attr = attrs[i];
		var contrs = attr.controls.get();
		if (attr.getRequiredLevel() == 'required') {
			switch (attr.getAttributeType()) {
				case 'memo':
					{
						attr.setValue('memo');
						break;
					}
				case 'string':
					{
						attr.setValue('string');
						break;
					}
				case 'boolean':
					{
						attr.setValue(false);
						break
					}
				case 'datetime':
					{
						var today = new Date();
						attr.setValue(today);
						break;
					}
				case 'decimal':
					{
						if(isMax === true)
							attr.setValue(attr.getMax());
						else
							attr.setValue(attr.getMin());
						break;
					}
				case 'double':
					{
						if(isMax === true)
							attr.setValue(attr.getMax());
						else
							attr.setValue(attr.getMin());
						break;
					}
				case 'integer':
					{
						if(isMax === true)
							attr.setValue(attr.getMax());
						else
							attr.setValue(attr.getMin());
						break;
					}
				case 'lookup':
					{
						attr.setValue(0);
						break;
					}
				case 'money':
					{
						if(isMax === true)
							attr.setValue(attr.getMax());
						else
							attr.setValue(attr.getMin());
						break;
					}
				case 'optionset':
					{
						var options = attr.getOptions();
						attr.setValue(options[0].value);
					}
			}
		}
	}
}