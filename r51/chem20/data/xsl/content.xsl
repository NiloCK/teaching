<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<xsl:param name="root" />
	
	<xsl:variable name="sco-path">
		<xsl:value-of select="$root" />
		<xsl:text>../content/</xsl:text>
		<xsl:value-of select="org/course/@id" />
		<xsl:text>/</xsl:text>
	</xsl:variable>
	
	
	<xsl:template match="org/course">
		<ul>
			<xsl:apply-templates select="module[@isvisible='true']" />
		</ul>
	</xsl:template>
	
	
	<xsl:template match="module">
		<li>
			<span class="module">
				<xsl:value-of select="@title" />
			</span>
			
			<xsl:if test="module or topic">
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
						
						<xsl:attribute name="onclick">
							<xsl:text>parent.ocv_menubar.updateTopic(</xsl:text>
							<xsl:value-of select="@id" />
							<xsl:text>);</xsl:text>
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