<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <g>
    <xsl:apply-templates select="child::*[1]" />
    </g>
</xsl:template>

<xsl:template match="plus" >
    <plus>
        <xsl:apply-templates select="child::*[1]" />
        <xsl:apply-templates select="child::*[2]" />
    </plus>
</xsl:template>

<xsl:template match="minus" >
    <minus>
        <xsl:apply-templates select="child::*[1]" />
        <xsl:apply-templates select="child::*[2]" />
    </minus>
</xsl:template>


<xsl:template match="times" >
    <plus>
        <times>
            <xsl:apply-templates select="child::*[1]" />
            <xsl:copy-of select="child::*[2]" />
        </times>
        <times>
            <xsl:copy-of select="child::*[1]" />
            <xsl:apply-templates select="child::*[2]" /> 
        </times>
    </plus>
</xsl:template>

<xsl:template match="div" >
    <div>
        <minus>
            <times>
                <xsl:apply-templates select ="child::*[1]"/>
                <xsl:copy-of select="child::*[2]" />
            </times>
            <times>
                <xsl:copy-of select="child::*[1]" />
                <xsl:apply-templates select ="child::*[2]"/>
            </times>
        </minus>
        <power>
            <xsl:copy-of select="child::*[2]" />
            <const>2</const>
        </power>
    </div>
</xsl:template>

<xsl:template match="power" >
    <times>
        <times>
            <const><xsl:value-of select="const"/></const>
            <power>
                <xsl:copy-of select="child::*[1]" />
                <const><xsl:value-of select="const"/> - 1</const>
            </power>
        </times>
        <xsl:apply-templates select="child::*[1]" />
    </times>
</xsl:template>

<xsl:template match="const" >
    <const>0</const>
</xsl:template>

<xsl:template match="var" >
    <const>1</const>
</xsl:template>

</xsl:stylesheet>
