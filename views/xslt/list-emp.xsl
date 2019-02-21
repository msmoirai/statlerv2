<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/root">
    <xsl:choose>

          <div class="wvu-container">

            <div >

            <ul class="wvu-profile">
              <li class="wvu-profile__individual">
                <div class="wvu-profile__individual-info">
                  <h2 class="wvu-profile__name wvu-h3">
                    <xsl:value-of select="fullName" />
                  </h2>
                  <h3 class="wvu-profile__job-title wvu-h5"><xsl:value-of select="position" /></h3>
                  <p class="wvu-profile__phone-icon">
                    <xsl:value-of select="phoneNumber" />
                  </p>
                  <p class="wvu-profile__email">
                    <xsl:value-of select="emailAddress" />
                  </p>
                  <p class="wvu-profile__location"><xsl:value-of select="buildingAbbreviation" /><xsl:value-of select="officeNumber2" /></p>
                </div>
              </li>

            </ul>


</div>
</div>





    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
