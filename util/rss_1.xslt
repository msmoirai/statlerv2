<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
  <xsl:template match="/">
    <ul class="jobs">
      <xsl:apply-templates select="//item[position() &lt; 5]"/>
    </ul>
  </xsl:template>

  <xsl:template match="item">
    <li>
      <h2 class="job-title">
      <a>
        <xsl:attribute name="href">
          <xsl:value-of select="link"/>
        </xsl:attribute>
        <xsl:value-of select="title"/>
      </a>
      </h2>

    </li>
  </xsl:template>
</xsl:stylesheet>
