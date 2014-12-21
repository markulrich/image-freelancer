$(function () {

  var myColorScheme = {
    //navigationbar: {
    //  background: '#f0f',
    //  border: '1px dotted #555',
    //  color: '#ccc',
    //  colorHover: '#fff'
    //},
    thumbnail: {
      background: 'rgba(1, 1, 1, 0.0)',
      border: '0px solid #000',
      //labelBackground: 'transparent',
      //labelOpacity: '0.8',
      //titleColor: '#fff',
      //descriptionColor: '#eee'
    }
  };

  $(".nanoGallery").nanoGallery({
    kind: 'flickr',
    userID: '130203367@N06',
    thumbnailWidth: 'auto',
    thumbnailHeight: 200,
    photoset: '72157649845564122',
    thumbnailHoverEffect: [{name: 'labelAppear75', duration: 300}],
    //theme: 'light',
    colorScheme: myColorScheme,
    thumbnailGutterWidth: 7,
    thumbnailGutterHeight: 7,
    i18n: {thumbnailImageDescription: 'View Photo'},
    thumbnailLabel: {display: true, position: 'overImageOnMiddle', align: 'center'}
  });
  var myColorSchemeViewer = {
    background: 'rgba(1, 1, 1, 0.75)'//,
    //imageBorder: '15px solid #f8f8f8',
    //imageBoxShadow: '#888 0px 0px 20px',
    //barBackground: '#222',
    //barBorder: '2px solid #111',
    //barColor: '#eee',
    //barDescriptionColor: '#aaa'
  };
  //
  //jQuery(".nanoGallery").nanoGallery({
  //  kind: 'flickr',
  //  userID: '130203367@N06',
  //  thumbnailWidth: 'auto',
  //  thumbnailHeight: 200,
  //  photoset: '72157649845564122',
  //  thumbnailHoverEffect: [{name: 'labelAppear75', duration: 300}],
  //  thumbnailHoverEffect: 'borderLighter',
  //  colorScheme: myColorScheme,
  //  thumbnailGutterWidth: 0,
  //  thumbnailGutterHeight: 0,
  //  i18n: {thumbnailImageDescription: 'View Photo'},
  //  thumbnailLabel: {display: true, position: 'overImageOnMiddle', align: 'center'},
  //  colorSchemeViewer: myColorSchemeViewer
  //});
});