<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">


  <xsl:output method="html"/>
    <xsl:template match="/">
      <ul class="wvu-profile">
        <r:if expr="{{ NOT(BLANK(dname)) }}">
          <xsl:variable name="dname"><r:var name="dname" /></xsl:variable>
          <xsl:apply-templates select="//event[PrimaryDepartment = $dname or SecondaryDepartment = $dname or TertiaryDepartment = $dname]"/>
        </r:if>

        <r:if expr="{{ BLANK(dname) }}">
          <xsl:apply-templates select="//event"/>
        </r:if>
      </ul>
    </xsl:template>

    <xsl:template match="event">
      <li class="wvu-profile__individual">

        <div class="wvu-profile__individual-photo">
          <a>
            <xsl:attribute name="href">/faculty-staff/directory/profile?pid=<xsl:value-of select="fullName" /></xsl:attribute>
            <img>
              <xsl:attribute name="src"><xsl:value-of select="photo" /></xsl:attribute>
            </img>
          </a>
        </div> <!-- /.wvu-profile__individual-photo -->

        <div class="wvu-profile__individual-info">
          <h2 class="wvu-profile__name">
            <a class="wvu-profile__name-link" href="<r:page:url />">
              <xsl:attribute name="href">/faculty-staff/directory/profile?pid=<xsl:value-of select="fullName" /></xsl:attribute>
              <xsl:value-of select="fullName" />
            </a>
          </h2>

          <p class="wvu-profile__job-title1"><xsl:value-of select="PrimaryTitle" />, <xsl:value-of select="PrimaryDepartment" /></p>

          <xsl:if test="normalize-space(SecondaryDepartment) != ''">
            <p class="wvu-profile__job-title2"><xsl:value-of select="SecondaryTitle" />, <xsl:value-of select="SecondaryDepartment" /></p>
          </xsl:if>

          <xsl:if test="normalize-space(TertiaryDepartment) != ''">
            <p class="wvu-profile__job-title3"><xsl:value-of select="TertiaryTitle" />, <xsl:value-of select="TertiaryDepartment" /></p>
          </xsl:if>

          <p class="wvu-profile__phone-icon">
            <a class="wvu-profile__phone">
              <xsl:attribute name="href">tel:<xsl:value-of select="phoneNumber" /></xsl:attribute>
              <xsl:value-of select="phoneNumber" />
            </a>
          </p>
          <p class="wvu-profile__email">
            <a class="wvu-profile__phone">
              <xsl:attribute name="href">mailto:<xsl:value-of select="emailAddress" /></xsl:attribute>
              <xsl:value-of select="emailAddress" />
            </a>
          </p>
          <p class="wvu-profile__room">
            <xsl:if test="normalize-space(SecondaryRoomNumber) != ''">
              <span><xsl:value-of select="SecondaryRoomNumber" /></span>
              <span style="margin-left: 7px;"><xsl:value-of select="SecondaryBuildingName" /></span>
            </xsl:if>

            <xsl:if test="normalize-space(SecondaryRoomNumber) = ''">
              <span><xsl:value-of select="officeNumber2" /></span>
              <span style="margin-left: 7px;"><xsl:value-of select="Building" /></span>
            </xsl:if>
          </p>
        </div> <!-- /.wvu-profile__individual-info -->

      </li> <!-- /.wvu-profile__individual -->
</xsl:template>


  </xsl:stylesheet>
