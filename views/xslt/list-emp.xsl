<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/root">
    <xsl:choose>

      <!-- test if there is an entry -->
      <xsl:when test="entry">

        <xsl:for-each select="entry">

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
                    <a class="wvu-profile__phone" href="tel:<xsl:value-of select="phoneNumber" />"><xsl:value-of select="phoneNumber" /></a>
                  </p>
                  <p class="wvu-profile__email">
                    <a href="mailto:<xsl:value-of select="emailAddress" />"><xsl:value-of select="emailAddress" /></a>
                  </p>
                  <p class="wvu-profile__location"><xsl:value-of select="buildingAbbreviation" /><xsl:value-of select="officeNumber2" /></p>
                </div>
              </li>

            </ul>


</div>
</div>


        </xsl:for-each>

      </xsl:when>

      <!-- if no entry through an error -->
      <xsl:otherwise>
        <xsl:choose>

          <!-- if there is an error message from lambda write it out -->
          <xsl:when test="message">

            <xsl:choose>
              <xsl:when test="code = '404NotFound'">
                <h2>No Results</h2>
              </xsl:when>
              <xsl:otherwise>
                <h2>Application Error</h2>
              </xsl:otherwise>
            </xsl:choose>

            <p><xsl:value-of select="message" /></p>

          </xsl:when>

          <!-- didn't find the error so write a standard message out -->
          <xsl:otherwise>
            <p>There was an unknown error with the application.</p>
          </xsl:otherwise>

        </xsl:choose>
      </xsl:otherwise>

    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
