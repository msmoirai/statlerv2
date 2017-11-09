<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
  <xsl:template match="/">
    <ul class="statler-dept-article">
      <xsl:apply-templates select="//item[position() &lt; 5]"/>
    </ul>
  </xsl:template>

  <xsl:template match="item">

    <li>
      <div class="statler-sub-story" role="article">
            <div class="statler-sub-article__body">

              <a>
                <xsl:attribute name="href">
                  <xsl:value-of select="link"/>
                </xsl:attribute>
                <xsl:value-of select="image"/>
              </a>

              <h2 class="statler-sub-story">
                <a class="statler-sub-story">
                <xsl:attribute name="href">
                  <xsl:value-of select="link"/>
                </xsl:attribute>
                <xsl:value-of select="title"/>
              </a></h2>



            </div> <!-- /.statler-sub-article__body -->

        </div><!-- statler-sub-story -->

    </li>



    <li>
      <h2>
      <a class="item-title">
        <xsl:attribute name="href">
          <xsl:value-of select="link"/>
        </xsl:attribute>
        <xsl:value-of select="title"/>
      </a>
      </h2>
      <div class="item-description">
        <xsl:value-of disable-output-escaping="yes" select="description"/>
      </div>
      <a class="button button--blue">
        <xsl:attribute name="href">
          <xsl:value-of select="link"/>
        </xsl:attribute>
          Read Full Article
      </a>
    </li>
  </xsl:template>
</xsl:stylesheet>
