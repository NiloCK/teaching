<?xml version="1.0" encoding="utf-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:param name="root" />
	
	
	<xsl:template match="org">
		<div class="topBar">
			<a href="../index.htm" target="_parent">
				<img src="img/home.png" width="16" height="16" alt="Course Home" border="0" align="absmiddle" />
				<xsl:text>My Home</xsl:text>
			</a>
		</div>
		<div id="midBar"><div id="ttl"><xsl:value-of select="course/@title" /></div></div>
		<div class="botBar">
			<a>
				<xsl:attribute name="href">
					<xsl:value-of select="$root" />
					<xsl:text>content.htm</xsl:text>
				</xsl:attribute>
				<xsl:attribute name="target">ocv_content</xsl:attribute>
				<xsl:attribute name="onclick">
					<xsl:text>parent.ocv_menubar.showTableOfContents();</xsl:text>
				</xsl:attribute>
				<img src="img/book.png" width="16" height="16" alt="Course Home" border="0" align="absmiddle" />
				<xsl:text>Course Home</xsl:text>
			</a>
		</div>
		
		<script type="text/javascript">
			<xsl:apply-templates select="//module[@isvisible='true']//topic[@isvisible='true']" />
		</script>
	</xsl:template>
	
	
	<xsl:template match="topic">
		<xsl:text>topicIds.push(</xsl:text>
		<xsl:value-of select="@id" />
		<xsl:text>);</xsl:text>
	</xsl:template>
	
	
</xsl:stylesheet>