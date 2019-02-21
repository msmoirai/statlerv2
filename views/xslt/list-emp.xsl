<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/root">
    <xsl:choose>

      <!-- test if there is an entry -->
      <xsl:when test="entry">

        <xsl:for-each select="entry">

          <div class="main--wide">
            <h1 class="wvu-h2"><xsl:value-of select="title" /></h1>
          </div>

          <div>
            <div class="background main">
              <p>
                This career was selected by the <a href="https://careerservices.wvu.edu">Career Services Center</a> using the <a href="https://www.onetonline.org">O*NET career database</a>. The information listed here is from that database and cannot be edited.
                To suggest a new career for your program please use the feedback form from the program page. Careers <em>must</em> be listed in the O*NET career database for inclusion in the career section of your program information.
              </p>
            </div>
            <div class="wvu-sidebar">
              <p>
                <xsl:if test="attributes = 'Bright Outlook'"><img src="/images/bf_lg.png" alt="'Bright outlook' icon" class="career-medium-glyph" /> This career has a bright outlook&#160;<br /></xsl:if>
                <xsl:if test="attributes = 'Green'"><img src="/images/green_lg.png" alt="'Green occupation' icon" class="career-medium-glyph" /> This is a green occupation&#160;<br /></xsl:if>
                <xsl:if test="attributes = 'Requires Graduate Degree'"><img src="/images/diploma.png" alt="'Requires a graduate degree' icon" class="career-medium-glyph" /> This career requires a graduate degree</xsl:if>
              </p>
            </div>
          </div>

          <div>

            <div class="background main">

              <h2 class="wvu-h3 h3-match-sidebar">Career Description</h2>
              <p>
                <xsl:value-of select="description" />
              </p>

              <h2 class="wvu-h3">What Job Titles <xsl:value-of select="title" /> Might Have</h2>
              <p>
                <xsl:value-of select="alsoCalled" />
              </p>

              <h2 class="wvu-h3">What <xsl:value-of select="title" /> Do</h2>
              <ul>
                <xsl:for-each select="jobTasks">
                  <xsl:sort select="."/>
                  <li><xsl:value-of select="." /></li>
                </xsl:for-each>
              </ul>

              <h2 class="wvu-h3">What <xsl:value-of select="title" /> Should Be Good At</h2>
              <ul>
                <xsl:for-each select="abilities">
                  <xsl:sort select="title"/>
                  <li>
                    <strong><xsl:value-of select="title" /></strong> - <xsl:value-of select="description" />
                  </li>
                </xsl:for-each>
              </ul>

              <h2 class="wvu-h3">What <xsl:value-of select="title" /> Should Be Interested In</h2>
              <ul>
                <xsl:for-each select="interests">
                  <xsl:sort select="title"/>
                  <li>
                    <strong><xsl:value-of select="title" /></strong> - <xsl:value-of select="description" />
                  </li>
                </xsl:for-each>
              </ul>

              <h2 class="wvu-h3">What <xsl:value-of select="title" /> Need to Learn</h2>
              <ul>
                <xsl:for-each select="knowledge">
                  <xsl:sort select="title"/>
                  <li>
                    <strong><xsl:value-of select="title" /></strong> - <xsl:value-of select="description" />
                  </li>
                </xsl:for-each>
              </ul>

            </div>

            <aside class="wvu-sidebar">

              <h3>The Basics</h3>
              <ul class="ul-li-tighten">
                <li>
                  <em>Median Salary:</em>&#160;
                  <xsl:if test="medianSalary = 0">
                    <abbr title="Not Available">NA</abbr>
                  </xsl:if>
                  <xsl:if test="not(medianSalary = 0)">
                    <xsl:value-of select="format-number(medianSalary, '$###,###')" />
                  </xsl:if>
                </li>

                <li> <em>O*NET Code:</em>&#160;<xsl:value-of select="code" /></li>
                <li>
                  <xsl:variable name="webAddress"><xsl:value-of select="webAddress" /></xsl:variable>
                  <a href="{$webAddress}">O*NET Summary</a>
                </li>
              </ul>

              <h3>Related Majors</h3>
              <ul class="ul-li-tighten">
                <xsl:for-each select="relatedMajors">
                  <xsl:sort select="title"/>
                  <xsl:variable name="code"><xsl:value-of select="code" /></xsl:variable>
                  <xsl:variable name="abbr"><xsl:value-of select="degreeDesignation/abbreviation" /></xsl:variable>
                  <li><a href="/program?pid={$code}{$abbr}"><xsl:value-of select="title" /></a></li>
                </xsl:for-each>
              </ul>

            </aside>

          </div>
          <div class="main--wide" style="margin-top: 20px;">
            <p style="font-size: 0.8em; max-width: 100%">This page includes information from <a href="https://www.onetonline.org/">O*NET OnLine</a> by the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA). Used under the <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> license. </p>
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
