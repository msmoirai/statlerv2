<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
  <xsl:template match="/">
    <ul class="statler-dept-article">
      <xsl:apply-templates select="//item[position() &lt; 5]"/>
      <li>
        <a class="button button--pms-300-c button--big button--pms-286-c-fill" href="<r:site:data name="department_news_url"/>">View More News</a>

      </li>
    </ul>
  </xsl:template>

  <xsl:template match="item">
    <li>
      <a>
        <xsl:attribute name="href">
          <xsl:value-of select="link"/>
        </xsl:attribute>
        <img class="statler-sub-article__body">
          <xsl:attribute name="src">
            <xsl:value-of select="image"/>
          </xsl:attribute>
          <xsl:attribute name="alt">
            <xsl:value-of select="image_alt"/>
          </xsl:attribute>
        </img>
      </a>
      <h2 class="statler-sub-story">
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
