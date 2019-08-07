import grails.plugins.metadata.GrailsPlugin
import org.grails.gsp.compiler.transform.LineNumber
import org.grails.gsp.GroovyPage
import org.grails.web.taglib.*
import org.grails.taglib.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_gbifbenin_hub_layoutsgeneric_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/layouts/generic.gsp" }
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
invokeTag('captureMeta','sitemesh',4,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("description"),'content':(grailsApplication.config.skin.orgNameLong)],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("author"),'content':(grailsApplication.config.skin.orgNameLong)],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',6,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("viewport"),'content':("width=device-width, initial-scale=1.0")],-1)
printHtmlPart(1)
createTagBody(3, {->
createTagBody(4, {->
invokeTag('layoutTitle','g',7,[:],-1)
})
invokeTag('captureTitle','sitemesh',7,[:],4)
})
invokeTag('wrapTitleTag','sitemesh',7,[:],3)
printHtmlPart(1)
invokeTag('stylesheet','asset',8,['src':("alaBs.css")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',9,['src':("alaBs.js")],-1)
printHtmlPart(2)
invokeTag('layoutHead','g',11,[:],-1)
printHtmlPart(3)
})
invokeTag('captureHead','sitemesh',13,[:],2)
printHtmlPart(0)
createTagBody(2, {->
printHtmlPart(3)
invokeTag('set','g',16,['var':("fluidLayout"),'value':(grailsApplication.config.skin.fluidLayout?.toBoolean())],-1)
printHtmlPart(4)
expressionOut.print(fluidLayout?'container-fluid':'container')
printHtmlPart(5)
invokeTag('layoutBody','g',18,[:],-1)
printHtmlPart(6)
expressionOut.print(fluidLayout?'container-fluid':'container')
printHtmlPart(7)
})
invokeTag('captureBody','sitemesh',23,['class':(pageProperty(name:'body.class')?:'nav-datasets'),'id':(pageProperty(name:'body.id')),'onload':(pageProperty(name:'body.onload'))],2)
printHtmlPart(0)
})
invokeTag('applyLayout','g',23,['name':("main")],1)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1535424829000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}
