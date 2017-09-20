// Functions to get shit

// HTML coordinates coords
function getCurrentScroll(siteContainer) {
    return {
        x: siteContainer.pageXOffset || siteContainer.scrollX || 0,
        y: siteContainer.pageYOffset || siteContainer.scrollY || 0
    };
}



// wix handle nav code
function handleNavigation(navInfo, linkUrl, changeUrl, keepRoots) {
    var siteData = this.props.siteData;
    if (navInfo.pageId === siteData.getPrimaryPageId()) {
        if (linkUrl !== '#') { //used for zoom
            var siteDataAPI = _.get(this.props, 'viewerPrivateServices.siteDataAPI');
            this.props.navigateMethod(this, siteDataAPI, linkUrl, navInfo, changeUrl, keepRoots);
        }
        this.handleSamePageAnchorNavigation(navInfo);
    } else {
        this.tryToNavigate(navInfo, !changeUrl);
    }
}