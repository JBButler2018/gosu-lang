package gw.specContrib.featureLiterals.javaMembersBinding

class Errant_BindJavaPropertiesToInstance {

  var jack: JavaClass
  //binding java class property to instance
  var javaInternalNameProp = jack#JavaInternalName
  var javaPrivateNameProp = jack#JavaPrivateName
  var javaProtectedNameProp = jack#JavaProtectedName
  var javaPublicNameProp = jack#JavaPublicName

  function getSetPropertiesFeatureLiterals() {
    var jInstance: JavaClass
    //set the values
    //correct arguments
    javaInternalNameProp.set("Ed")
    javaPrivateNameProp.set("Ed")
    javaProtectedNameProp.set("Ed")
    javaPublicNameProp.set("Ed")

    //incorrect arguments
    javaInternalNameProp.set(jInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    javaInternalNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaInternalNameProp.set(jInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaInternalNameProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    javaPrivateNameProp.set(jInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    javaPrivateNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaPrivateNameProp.set(jInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaPrivateNameProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    javaProtectedNameProp.set(jInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    javaProtectedNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaProtectedNameProp.set(jInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaProtectedNameProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    javaPublicNameProp.set(jInstance, "Ed")      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING)'
    javaPublicNameProp.set(jInstance, "Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, JAVA.LANG.STRING, INT)'
    javaPublicNameProp.set(jInstance, 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS, INT)'
    javaPublicNameProp.set("Ed", 42)      //## issuekeys: 'SET(JAVA.LANG.STRING)' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING, INT)'

    //get the values
    var x1111 = javaInternalNameProp.get()
    var x1112 = javaInternalNameProp.get(jInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1113 = javaInternalNameProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

    var x1121 = javaPrivateNameProp.get()
    var x1122 = javaPrivateNameProp.get(jInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1123 = javaPrivateNameProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

    var x1131 = javaProtectedNameProp.get()
    var x1132 = javaProtectedNameProp.get(jInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1133 = javaProtectedNameProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

    var x1141 = javaPublicNameProp.get()
    var x1142 = javaPublicNameProp.get(jInstance)      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(GW.SPECCONTRIB.AAA.PARSERVSOPENSOURCE.FEATURELITERALS.FEATURELITERALSMAIN.JAVAFEATURELITERALS.JAVACLASS)'
    var x1143 = javaPublicNameProp.get("hi")      //## issuekeys: 'GET()' IN 'GW.LANG.REFLECT.FEATURES.BOUNDPROPERTYREFERENCE' CANNOT BE APPLIED TO '(JAVA.LANG.STRING)'

  }


}