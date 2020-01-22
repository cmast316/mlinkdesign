(function(){
	var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.playList_EB406BDA_CBA0_3EEE_417D_81C80DB0D70F.set('selectedIndex', 0)",
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "contentOpaque": false,
 "width": "100%",
 "children": [
  "this.MainViewer",
  "this.Container_D96082A1_C9A1_E95D_41AA_AC860DC79609",
  "this.MapViewer"
 ],
 "gap": 10,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.75,
 "minHeight": 20,
 "borderRadius": 0,
 "definitions": [{
 "children": [
  "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
  "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
  "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
  "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
  "this.Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
  "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
  "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
  "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
  "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375"
 ],
 "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
 "contentOpaque": false,
 "width": 421,
 "gap": 4,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "minWidth": 421,
 "class": "Container",
 "layout": "horizontal",
 "data": {
  "name": "Container53059"
 },
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "overflow": "hidden",
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver"
},
{
 "hfovMin": "150%",
 "label": "Smaller Room",
 "id": "panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_t.jpg"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_t.jpg",
 "overlays": [
  "this.overlay_DBDAEC07_C9A0_3965_41E7_E1BAAD1A8658"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3201317_C9A0_EF65_41D0_9BA842A41400"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8",
   "x": 3225.64,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 1450.24
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "FadeInEffect_EFA0BE7F_CA60_19A5_41E5_32B174278546"
},
{
 "class": "PlayList",
 "id": "playList_EB406BDA_CBA0_3EEE_417D_81C80DB0D70F",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ]
},
{
 "hfovMin": "100%",
 "label": "Meeting Space Level",
 "id": "panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63",
 "vfov": 17.93,
 "hfov": 30,
 "class": "Panorama",
 "pitch": 0,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 17920,
      "rowCount": 35,
      "colCount": 35,
      "height": 17920
     },
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 9216,
      "rowCount": 18,
      "colCount": 18,
      "height": 9216
     },
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 4608,
      "rowCount": 9,
      "colCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/4/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/5/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0/f/6/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_t.jpg"
  }
 ],
 "partial": true,
 "hfovMax": 30,
 "thumbnailUrl": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_t.jpg",
 "overlays": [
  "this.overlay_EF5D56E8_CA63_F6AB_41E1_806BDE177228",
  "this.overlay_EF5D66E8_CA63_F6AB_41CE_FE7378CBF689",
  "this.overlay_EF5D76E8_CA63_F6AB_41E3_E9B2A9C88C9F",
  "this.overlay_EF5D96E8_CA63_F6AB_41C3_B5F6BF22FB7A",
  "this.overlay_EF5DA6E8_CA63_F6AB_41A2_8610F4AB11A6",
  "this.overlay_EF5DC6E8_CA63_F6AB_41CF_0519A7D5AAE8"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3201317_C9A0_EF65_41D0_9BA842A41400"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3201317_C9A0_EF65_41D0_9BA842A41400"
  }
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63",
   "class": "PanoramaPlayListItem",
   "start": "this._initItemWithComps(this.mainPlayList, 0, [this.MapViewer], 'begin', false, this.FadeOutEffect_EFA10E7E_CA60_19A7_41E2_FB19B60CF3F2, 0, 0); this._initItemWithComps(this.mainPlayList, 0, [this.MapViewer], 'end', true, this.FadeInEffect_EFA0BE7F_CA60_19A5_41E5_32B174278546, 0, 0)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_camera"
  },
  "this.PanoramaPlayListItem_E8BC0C23_CBA0_395D_41E9_5051BF23F1DE",
  "this.PanoramaPlayListItem_E8BC9C23_CBA0_395D_41DF_9E1C9361983E"
 ]
},
{
 "verticalAlign": "middle",
 "children": [
  "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
  "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
  "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15"
 ],
 "id": "Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
 "contentOpaque": false,
 "width": 40,
 "gap": 4,
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "borderRadius": 0,
 "height": "100%",
 "paddingBottom": 0,
 "minWidth": 20,
 "class": "Container",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container53064"
 },
 "shadow": false,
 "paddingTop": 0,
 "overflow": "hidden",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver"
},
{
 "id": "IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53062"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "buttonZoomOut": "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
 "buttonMoveLeft": "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
 "buttonPlayLeft": "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
 "id": "MainViewerPanoramaPlayer",
 "buttonMoveDown": "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
 "buttonMoveRight": "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
 "buttonMoveUp": "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "buttonPlayRight": "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
 "buttonRestart": "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
 "buttonZoomIn": "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
 "buttonPause": "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "id": "IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53071"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "class": "PlayList",
 "id": "playList_EB403BDF_CBA0_3EE5_41E8_7698A2B144C8",
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ]
},
{
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingTop": 4,
 "paddingTop": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "id": "MainViewer",
 "left": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "vrPointerSelectionColor": "#FF6600",
 "minHeight": 50,
 "playbackBarHeadWidth": 6,
 "toolTipShadowVerticalLength": 0,
 "borderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBorderSize": 2,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadHeight": 30,
 "toolTipTextShadowOpacity": 0,
 "playbackBarLeft": 0,
 "toolTipOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "height": "100%",
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#333333",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingRight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressRight": 10,
 "progressBarOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarRight": 0,
 "playbackBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "progressBorderSize": 2,
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadBorderSize": 0,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "progressOpacity": 1,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeight": 20,
 "playbackBarOpacity": 1,
 "progressBottom": 1,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Calibri Light",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "progressHeight": 20,
 "transitionMode": "blending",
 "toolTipShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarBottom": 10,
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "toolTipFontSize": "12px",
 "progressBorderColor": "#AAAAAA",
 "toolTipFontWeight": "normal"
},
{
 "id": "IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53070"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "id": "IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53069"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "FadeOutEffect_EFA10E7E_CA60_19A7_41E2_FB19B60CF3F2"
},
{
 "initialSequence": "this.sequence_C331E72B_C9A0_17AD_41E5_99FD94FA464F",
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53065"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "id": "IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53060"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "id": "IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53061"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "overlays": [
  "this.overlay_EA9A9A6B_CBA1_F9AD_41E0_4B5ED3D8AD8C",
  "this.overlay_EADB8B1E_CBA0_1F67_41E9_3D1BD57D8504",
  "this.overlay_D55846AE_CBA0_16A7_41E5_9EED03D1AFED",
  "this.overlay_EA770E2E_CBA0_19A7_41E5_37980C5483C3"
 ],
 "thumbnailUrl": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_t.png",
 "label": "Meeting Space Level",
 "id": "map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8",
 "maximumZoomFactor": 1.8,
 "class": "Map",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8.png",
    "width": 3200,
    "class": "ImageResourceLevel",
    "height": 1745
   },
   {
    "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_lq.png",
    "width": 346,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 189
   }
  ]
 },
 "initialZoomFactor": 1,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "fieldOfViewOverlayRadiusScale": 0.05,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FCE66C",
 "width": 4000,
 "minimumZoomFactor": 0.9,
 "height": 2182
},
{
 "initialSequence": "this.sequence_C331C72B_C9A0_17AD_41E7_481BC2FC9862",
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.75,
  "pitch": 4.77
 },
 "id": "panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53068"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "id": "IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53066"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "id": "IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53067"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "children": [
  "this.Container_52344940_5F01_EFC4_41D4_ABA40101D8BF"
 ],
 "scrollBarWidth": 10,
 "left": "0%",
 "contentOpaque": false,
 "width": "100%",
 "id": "Container_D96082A1_C9A1_E95D_41AA_AC860DC79609",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "gap": 10,
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "0%",
 "height": 142,
 "paddingBottom": 0,
 "minWidth": 1,
 "class": "Container",
 "layout": "horizontal",
 "data": {
  "name": "Controls"
 },
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver"
},
{
 "id": "IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
 "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_rollover.png",
 "width": 40,
 "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_pressed.png",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "height": 40,
 "paddingBottom": 0,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C.png",
 "verticalAlign": "middle",
 "data": {
  "name": "Button53063"
 },
 "shadow": false,
 "paddingTop": 0,
 "propagateClick": false,
 "cursor": "hand",
 "transparencyActive": true
},
{
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingTop": 4,
 "paddingTop": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "id": "MapViewer",
 "left": 12,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipBorderSize": 1,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "27.563%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingLeft": 0,
 "vrPointerSelectionColor": "#FF6600",
 "minHeight": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowVerticalLength": 0,
 "borderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBorderSize": 2,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderRadius": 0,
 "playbackBarHeadOpacity": 1,
 "minWidth": 1,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadHeight": 30,
 "toolTipTextShadowOpacity": 0,
 "playbackBarLeft": 0,
 "toolTipOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowBlurRadius": 3,
 "height": "32.787%",
 "toolTipBorderColor": "#767676",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingRight": 6,
 "vrPointerColor": "#FFFFFF",
 "progressRight": 10,
 "progressBarOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderColor": "#AAAAAA",
 "playbackBarRight": 0,
 "playbackBarBorderRadius": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipShadowSpread": 0,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "progressBorderSize": 2,
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "top": 12,
 "playbackBarHeadShadowVerticalLength": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadBorderSize": 0,
 "paddingBottom": 0,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "progressOpacity": 1,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeight": 20,
 "playbackBarOpacity": 1,
 "progressBottom": 2,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 10,
 "progressHeight": 20,
 "transitionMode": "blending",
 "toolTipShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "toolTipFontSize": 12,
 "progressBorderColor": "#AAAAAA",
 "toolTipFontWeight": "normal"
},
{
 "class": "MapPlayer",
 "buttonZoomIn": "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
 "viewerArea": "this.MapViewer",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
 "id": "MapViewerMapPlayer"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 27,
  "class": "PanoramaCameraPosition",
  "yaw": -0.45,
  "pitch": 0
 },
 "id": "panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "Ballroom",
 "id": "panorama_C3201317_C9A0_EF65_41D0_9BA842A41400",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_t.jpg"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_t.jpg",
 "hfovMin": "150%",
 "mapLocations": [
  {
   "map": "this.map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8",
   "x": 1030.52,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 784.79
  }
 ]
},
{
 "class": "MapPlayer",
 "buttonZoomIn": "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
 "viewerArea": "this.MainViewer",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
 "id": "MainViewerMapPlayer"
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "roll": 0,
   "hfov": 15.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0_HS_0_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ]
   },
   "pitch": -2.12,
   "yaw": -152.2
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "enabled": false,
 "rollOverDisplay": false,
 "id": "overlay_DBDAEC07_C9A0_3965_41E7_E1BAAD1A8658",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "hfov": 15.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -152.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_0_HS_0_1_0_map.gif",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": -2.12
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Go to the main ballroom"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "roll": 0,
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0_HS_0_0.png",
      "width": 1147,
      "class": "ImageResourceLevel",
      "height": 599
     }
    ]
   },
   "pitch": 1.77,
   "yaw": -6.99
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": true,
 "id": "overlay_EF5D56E8_CA63_F6AB_41E1_806BDE177228",
 "data": {
  "label": "Ballroom"
 },
 "maps": [
  {
   "hfov": 7.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ]
   },
   "pitch": 1.77
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2); this.setMediaBehaviour(this.playList_EB406BDA_CBA0_3EEE_417D_81C80DB0D70F, 0, this.panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Ballroom"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "roll": 0,
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_1_0.png",
      "width": 681,
      "class": "ImageResourceLevel",
      "height": 453
     }
    ]
   },
   "pitch": -2.41,
   "yaw": 8.21
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": true,
 "id": "overlay_EF5D66E8_CA63_F6AB_41CE_FE7378CBF689",
 "data": {
  "label": "Meeting Room"
 },
 "maps": [
  {
   "hfov": 4.45,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_1_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": -2.41
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Meeting Room"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 2.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_2_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": 2.73,
   "yaw": -6.35,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EF5D76E8_CA63_F6AB_41E3_E9B2A9C88C9F",
 "data": {
  "label": "Ballroom"
 },
 "maps": [
  {
   "hfov": 2.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_2_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.73
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 3.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_3_0.png",
      "width": 465,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": -1.86,
   "yaw": 8.06,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EF5D96E8_CA63_F6AB_41C3_B5F6BF22FB7A",
 "data": {
  "label": "Meeting Room"
 },
 "maps": [
  {
   "hfov": 3.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_3_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.86
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 0.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_4_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -2.73,
   "yaw": 8.07
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EF5DA6E8_CA63_F6AB_41A2_8610F4AB11A6",
 "data": {
  "label": "Meeting Room"
 },
 "maps": [
  {
   "hfov": 0.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.73
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 0.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_5_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": 1.9,
   "yaw": -6.6
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EF5DC6E8_CA63_F6AB_41CF_0519A7D5AAE8",
 "data": {
  "label": "Ballroom"
 },
 "maps": [
  {
   "hfov": 0.52,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EF5D26E8_CA63_F6AB_41E1_661ED570BB63_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.9
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "media": "this.panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266",
 "class": "PanoramaPlayListItem",
 "begin": "this.executeFunctionWhenChange(this.mainPlayList, 1, function(){;this.playList_EB403BDF_CBA0_3EE5_41E8_7698A2B144C8.set('selectedIndex', 0)}); this.setMapLocation(this.PanoramaPlayListItem_E8BC0C23_CBA0_395D_41E9_5051BF23F1DE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E8BC0C23_CBA0_395D_41E9_5051BF23F1DE",
 "camera": "this.panorama_C2F90875_C9A0_19A5_41C2_2ADF7272A266_camera"
},
{
 "media": "this.panorama_C3201317_C9A0_EF65_41D0_9BA842A41400",
 "class": "PanoramaPlayListItem",
 "begin": "this.executeFunctionWhenChange(this.mainPlayList, 2, function(){;this.playList_EB403BDF_CBA0_3EE5_41E8_7698A2B144C8.set('selectedIndex', 0)}); this.setMapLocation(this.PanoramaPlayListItem_E8BC9C23_CBA0_395D_41DF_9E1C9361983E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "end": "this.trigger('tourEnded')",
 "id": "PanoramaPlayListItem_E8BC9C23_CBA0_395D_41DF_9E1C9361983E",
 "camera": "this.panorama_C3201317_C9A0_EF65_41D0_9BA842A41400_camera"
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C331E72B_C9A0_17AD_41E5_99FD94FA464F",
 "class": "PanoramaCameraSequence"
},
{
 "map": {
  "width": 1160.65,
  "x": 350.99,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_12_map.gif",
     "width": 200,
     "class": "ImageResourceLevel",
     "height": 104
    }
   ]
  },
  "y": 532.27,
  "offsetY": 0,
  "height": 608.63,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "width": 1160.65,
  "x": 350.99,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_12.png",
     "width": 928,
     "class": "ImageResourceLevel",
     "height": 486
    }
   ]
  },
  "y": 532.27,
  "height": 608.63
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EA9A9A6B_CBA1_F9AD_41E0_4B5ED3D8AD8C",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Ballroom"
  }
 ]
},
{
 "map": {
  "width": 108.51,
  "x": 976.5,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_13_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 730.64,
  "offsetY": 0,
  "height": 108.51,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 976.27,
  "y": 730.54,
  "width": 108.51,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_13.png",
     "width": 86,
     "class": "ImageResourceLevel",
     "height": 86
    }
   ]
  },
  "height": 108.51
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EADB8B1E_CBA0_1F67_41E9_3D1BD57D8504",
 "data": {
  "label": "Ballroom"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ]
},
{
 "map": {
  "width": 670.91,
  "x": 2924.26,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_14_map.gif",
     "width": 200,
     "class": "ImageResourceLevel",
     "height": 129
    }
   ]
  },
  "y": 1245.35,
  "offsetY": 0,
  "height": 435.95,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "width": 670.91,
  "x": 2924.26,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_14.png",
     "width": 536,
     "class": "ImageResourceLevel",
     "height": 348
    }
   ]
  },
  "y": 1245.35,
  "height": 435.95
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_D55846AE_CBA0_16A7_41E5_9EED03D1AFED",
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ]
},
{
 "map": {
  "width": 108,
  "x": 3171.69,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_15_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1396.46,
  "offsetY": 0,
  "height": 108,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "image": {
  "x": 3171.64,
  "y": 1396.24,
  "width": 108,
  "class": "HotspotMapOverlayImage",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D475D2B4_CAE0_2EBB_41DA_45C6085F22A8_HS_15.png",
     "width": 86,
     "class": "ImageResourceLevel",
     "height": 86
    }
   ]
  },
  "height": 108
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_EA770E2E_CBA0_19A7_41E5_37980C5483C3",
 "data": {
  "label": "Meeting Room"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ]
},
{
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C331C72B_C9A0_17AD_41E7_481BC2FC9862",
 "class": "PanoramaCameraSequence"
}],
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "scripts": {
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); window.open(url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(info.itemCondition !== undefined && !info.itemCondition.call(this, src)) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'to' : 'from')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\\text-align:left\\><SPAN STYLE=\\color:#FFFFFF;font-size:12px;font-family:Verdana\\><span color=\\white\\ font-family=\\Verdana\\ font-size=\\12px\\>' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); }
 },
 "height": "100%",
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "layout": "absolute",
 "data": {
  "name": "Player43899"
 },
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "downloadEnabled": false,
 "overflow": "hidden",
 "verticalAlign": "top",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
