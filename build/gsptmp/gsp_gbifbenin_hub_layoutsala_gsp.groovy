import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_gbifbenin_hub_layoutsala_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/layouts/ala.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
createTagBody(1, {->
printHtmlPart(0)
createTagBody(2, {->
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',3,['gsp_sm_xmlClosingForEmptyTag':("/"),'http-equiv':("Content-Type"),'content':("text/html; charset=UTF-8")],-1)
printHtmlPart(1)
invokeTag('addApplicationMetaTags','alatag',4,[:],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("description"),'content':("Portail du GBIF Bénin")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',6,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("author"),'content':("GBIF Bénin")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',7,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("viewport"),'content':("width=device-width, initial-scale=1.0")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',8,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("breadcrumb"),'content':(pageProperty(name:'meta.breadcrumb'))],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',9,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("breadcrumbs"),'content':(pageProperty(name:'meta.breadcrumbs'))],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',10,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("breadcrumbParent"),'content':(pageProperty(name:'meta.breadcrumbParent'))],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',11,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("hideBreadcrumb"),'content':(pageProperty(name:'meta.hideBreadcrumb'))],-1)
printHtmlPart(2)
createTagBody(3, {->
createTagBody(4, {->
invokeTag('layoutTitle','g',14,[:],-1)
})
invokeTag('captureTitle','sitemesh',14,[:],4)
})
invokeTag('wrapTitleTag','sitemesh',14,[:],3)
printHtmlPart(1)
invokeTag('render','g',15,['template':("/layouts/global"),'plugin':("biocache-hubs")],-1)
printHtmlPart(3)
invokeTag('stylesheet','asset',17,['src':("alaBs.css")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',18,['src':("alaBs.js")],-1)
printHtmlPart(3)
invokeTag('layoutHead','g',20,[:],-1)
printHtmlPart(3)
if(true && (pageProperty(name:'meta.fluidLayout'))) {
invokeTag('set','g',22,['var':("fluidLayout"),'value':(pageProperty(name:'meta.fluidLayout').toBoolean())],-1)
}
else {
invokeTag('set','g',23,['var':("fluidLayout"),'value':(grailsApplication.config.skin.fluidLayout?.toBoolean())],-1)
}
printHtmlPart(0)
})
invokeTag('captureHead','sitemesh',24,[:],2)
printHtmlPart(0)
createTagBody(2, {->
printHtmlPart(4)
expressionOut.print(fluidLayout?'container-fluid':'container')
printHtmlPart(5)
invokeTag('layoutBody','g',27,[:],-1)
printHtmlPart(6)
expressionOut.print(fluidLayout?'container-fluid':'container')
printHtmlPart(7)
})
invokeTag('captureBody','sitemesh',32,['class':("${pageProperty(name:'body.class')?:'nav-datasets'} ${fluidLayout?'fluid':''}"),'id':(pageProperty(name:'body.id')),'onload':(pageProperty(name:'body.onload'))],2)
printHtmlPart(0)
})
invokeTag('applyLayout','g',32,['name':("main")],1)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1534689219000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
