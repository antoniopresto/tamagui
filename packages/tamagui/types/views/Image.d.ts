import { GetProps, StackProps } from '@tamagui/core';
import React from 'react';
declare const StyledImage: import("@tamagui/core").TamaguiComponent<(Omit<import("react-native").ImageProps, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "onPress" | "onPressIn" | "onPressOut" | "style" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "display" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "cursor" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "pointerEvents" | "theme" | "space" | "focusable" | "href" | "onMouseEnter" | "onMouseLeave" | "onFocus" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "animation" | "animateOnly" | "debug" | "disabled" | "className" | "id" | "tag" | "onHoverIn" | "onHoverOut" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dataSet" | "target" | "rel" | "download" | "hrefAttrs" | "onMouseDown" | "onMouseUp" | "onScroll"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>>) | (Omit<import("react-native").ImageProps, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "onPress" | "onPressIn" | "onPressOut" | "style" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "display" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "cursor" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "pointerEvents" | "theme" | "space" | "focusable" | "href" | "onMouseEnter" | "onMouseLeave" | "onFocus" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "animation" | "animateOnly" | "debug" | "disabled" | "className" | "id" | "tag" | "onHoverIn" | "onHoverOut" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dataSet" | "target" | "rel" | "download" | "hrefAttrs" | "onMouseDown" | "onMouseUp" | "onScroll"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & Omit<Object, string | number> & {
    [x: string]: string | undefined;
} & import("@tamagui/core").MediaProps<Partial<Omit<import("react-native").ImageProps, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "onPress" | "onPressIn" | "onPressOut" | "style" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "display" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "cursor" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "pointerEvents" | "theme" | "space" | "focusable" | "href" | "onMouseEnter" | "onMouseLeave" | "onFocus" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "animation" | "animateOnly" | "debug" | "disabled" | "className" | "id" | "tag" | "onHoverIn" | "onHoverOut" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dataSet" | "target" | "rel" | "download" | "hrefAttrs" | "onMouseDown" | "onMouseUp" | "onScroll"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & Omit<Object, string | number> & {
    [x: string]: string | undefined;
}>> & import("@tamagui/core").PseudoProps<Partial<Omit<import("react-native").ImageProps, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "onPress" | "onPressIn" | "onPressOut" | "style" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "display" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "cursor" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "pointerEvents" | "theme" | "space" | "focusable" | "href" | "onMouseEnter" | "onMouseLeave" | "onFocus" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "animation" | "animateOnly" | "debug" | "disabled" | "className" | "id" | "tag" | "onHoverIn" | "onHoverOut" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dataSet" | "target" | "rel" | "download" | "hrefAttrs" | "onMouseDown" | "onMouseUp" | "onScroll"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>> & Omit<Object, string | number> & {
    [x: string]: string | undefined;
}>>), any, Omit<import("react-native").ImageProps, "width" | "height" | "padding" | "paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingHorizontal" | "paddingVertical" | "margin" | "marginTop" | "marginBottom" | "marginLeft" | "marginRight" | "marginHorizontal" | "marginVertical" | "flex" | "flexDirection" | "flexWrap" | "flexGrow" | "flexShrink" | "flexBasis" | "alignItems" | "alignContent" | "justifyContent" | "alignSelf" | "backgroundColor" | "borderRadius" | "borderTopRightRadius" | "borderBottomRightRadius" | "borderBottomLeftRadius" | "borderTopLeftRadius" | "zIndex" | "left" | "right" | "onLayout" | "children" | "onPress" | "onPressIn" | "onPressOut" | "style" | "testID" | "nativeID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | `$${string}` | "display" | "borderBottomColor" | "borderBottomEndRadius" | "borderBottomStartRadius" | "borderBottomWidth" | "borderColor" | "borderEndColor" | "borderLeftColor" | "borderLeftWidth" | "borderRightColor" | "borderRightWidth" | "borderStartColor" | "borderStyle" | "borderTopColor" | "borderTopEndRadius" | "borderTopStartRadius" | "borderTopWidth" | "borderWidth" | "opacity" | "aspectRatio" | "borderEndWidth" | "borderStartWidth" | "bottom" | "end" | "marginEnd" | "marginStart" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "overflow" | "paddingEnd" | "paddingStart" | "position" | "start" | "top" | "direction" | "shadowColor" | "shadowOffset" | "shadowOpacity" | "shadowRadius" | "transform" | "transformMatrix" | "rotation" | "scaleX" | "scaleY" | "translateX" | "translateY" | "cursor" | "x" | "y" | "perspective" | "scale" | "skewX" | "skewY" | "matrix" | "rotate" | "rotateY" | "rotateX" | "rotateZ" | "contain" | "pointerEvents" | "theme" | "space" | "focusable" | "href" | "onMouseEnter" | "onMouseLeave" | "onFocus" | "onMoveShouldSetResponder" | "onMoveShouldSetResponderCapture" | "onResponderEnd" | "onResponderGrant" | "onResponderMove" | "onResponderReject" | "onResponderRelease" | "onResponderStart" | "onResponderTerminate" | "onResponderTerminationRequest" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onStartShouldSetResponder" | "onStartShouldSetResponderCapture" | "animation" | "animateOnly" | "debug" | "disabled" | "className" | "id" | "tag" | "onHoverIn" | "onHoverOut" | "hoverStyle" | "pressStyle" | "focusStyle" | "exitStyle" | "enterStyle" | "hitSlop" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "dataSet" | "target" | "rel" | "download" | "hrefAttrs" | "onMouseDown" | "onMouseUp" | "onScroll"> & Omit<import("react-native").ViewProps, "children" | "display"> & import("@tamagui/core/types/types-rnw").RNWViewProps & import("@tamagui/core").TamaguiComponentPropsBase & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>> & import("@tamagui/core").MediaProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>> & import("@tamagui/core").PseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>>>, Object & ({} | {
    [x: string]: string | undefined;
})>;
declare type StyledImageProps = GetProps<typeof StyledImage>;
export declare type ImageProps = Omit<StackProps, keyof StyledImageProps> & Omit<StyledImageProps, 'source' | 'width' | 'height' | 'style' | 'onLayout'> & {
    width: number;
    height: number;
    src: string | StyledImageProps['source'];
};
export declare const Image: React.FC<ImageProps>;
export {};
//# sourceMappingURL=Image.d.ts.map