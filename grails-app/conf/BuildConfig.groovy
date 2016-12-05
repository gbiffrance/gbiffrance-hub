grails.servlet.version = "2.5" // Change depending on target container compliance (2.5 or 3.0)
grails.project.class.dir = "target/classes"
grails.project.test.class.dir = "target/test-classes"
grails.project.test.reports.dir = "target/test-reports"
grails.project.work.dir = "target/work"
grails.project.target.level = 1.7
grails.project.source.level = 1.7
//grails.project.plugins.dir="plugins"
//grails.project.war.file = "target/${appName}-${appVersion}.war"
//grails.plugin.location.'biocache-hubs' = "../biocache-hubs"

grails.project.fork = [
        test: false,
        run: false
]

grails.project.dependency.resolver = "maven" // or ivy
grails.project.dependency.resolution = {
    // inherit Grails' default dependencies
    inherits("global") {
        // specify dependency exclusions here; for example, uncomment this to disable ehcache:
        // excludes 'ehcache'
    }
    log "error" // log level of Ivy resolver, either 'error', 'warn', 'info', 'debug' or 'verbose'
    checksums true // Whether to verify checksums on resolve
    legacyResolve false // whether to do a secondary resolve on plugin installation, not advised and here for backwards compatibility

    repositories {
        mavenLocal()
        mavenRepo ("http://nexus.ala.org.au/content/groups/public/")
    }

    dependencies {
        compile "commons-httpclient:commons-httpclient:3.1"
        runtime "commons-lang:commons-lang:2.6"
        runtime "net.sf.supercsv:super-csv:2.1.0"
    }

    plugins {
        build(  ":tomcat:7.0.50",
                ":release:3.0.1",
                ":rest-client-builder:1.0.3") {
            export = false
        }
        // plugins for the build system only
        compile ':cache:1.1.1'
        compile ":cache-headers:1.1.6"
        compile ":rest:0.8"
        compile ":build-info:1.2.6"
        runtime ":resources:1.2.8"
        runtime ":cached-resources:1.0"
        runtime ":biocache-hubs:1.1.4"
        compile ":jquery:1.11.1"
        runtime ":release:3.0.1"
        runtime ":ala-admin-plugin:1.2"
        compile ":ala-charts-plugin:1.2-SNAPSHOT"
        compile ":images-client-plugin:0.7.7-SNAPSHOT"
    }
}
