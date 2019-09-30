<?xml version="1.0" encoding="utf-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:param name="root" />
	
	<xsl:variable name="sco-path">
		<xsl:value-of select="$root" />
		<xsl:text>../content/</xsl:text>
		<xsl:value-of select="org/course/@id" />
		<xsl:text>/</xsl:text>
	</xsl:variable>
	
	
	<xsl:template match="module">
		<li>
			<span class="module">
				<xsl:value-of select="@title" />
			</span>
			
			<xsl:if test="module[@isvisible='true'] or topic[@isvisible='true']">
				<ul>
					<xsl:apply-templates />
				</ul>
			</xsl:if>
		</li>	
	</xsl:template>
	
	
	<xsl:template match="topic">
		<li class="topic">
			<xsl:attribute name="id"><xsl:value-of select="@id" /></xsl:attribute>
			
			<xsl:choose>
				
				<xsl:when test="@href != ''">
					
					<xsl:element name="a">
						
						<xsl:attribute name="href">
							<xsl:if test="not(starts-with(@href,'http'))">
								<xsl:value-of select="$sco-path" />
							</xsl:if>
							<xsl:value-of select="@href" />
						</xsl:attribute>
						
						<xsl:attribute name="target">ocv_content</xsl:attribute>
						
						<xsl:attribute name="onclick">
							<xsl:text>updateTopic(</xsl:text>
							<xsl:value-of select="@id" />
							<xsl:text>); return false;</xsl:text>
						</xsl:attribute>
						
						<xsl:value-of select="@title" />
						
					</xsl:element>
					
				</xsl:when>
				
				<xsl:otherwise>
					<xsl:attribute name="class">topic disabled</xsl:attribute>
					<xsl:value-of select="@title" />
				</xsl:otherwise>
				
			</xsl:choose>
		</li>
	</xsl:template>
	
</xsl:stylesheet>