import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-wrapper',
  styleUrl: 's-wrapper.css',
  shadow: false,
  scoped: true
})
export class SWrapper implements ComponentInterface {
  @Prop() forWrapper: any;

  @Prop() forCarousel: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SWrapper[] = []

  /**
   * Клик по title
   */
  @Event() clickWrapperTitle: EventEmitter;

  /**
   * Клик по subtitle
   */
  @Event() clickWrapperSubTitle: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWrapperText: EventEmitter;

  /**
   * Клик по GoogleImage
   */
  @Event() clickWrapperGoogleImage: EventEmitter;

  /**
   * Клик по AppImage
   */
  @Event() clickWrapperAppImage: EventEmitter;

  /**
   * Клик по subtext
   */
  @Event() clickWrapperSubText: EventEmitter;

  /**
   * Клик по ProductImage
   */
  @Event() clickWrapperProductImage: EventEmitter;

  /**
   * Клик по PhoneImage
   */
  @Event() clickWrapperPhoneImage: EventEmitter;

  componentDidLoad() {
    const elem = document.querySelector('.carousel');
    // @ts-ignore
    const flkty = new Flickity( elem, {
      // options
      autoPlay: true,
      contain: true,
      prevNextButtons: false,
      pageDots: false
    });

// element argument can be a selector string
//   for an individual element
    // @ts-ignore
    // var flkty = new Flickity( '.main-carousel', {
    //   // options
    //  });
  }



  render() {

    const getCarousel = this.forCarousel.map((item) => {
      return (
              <div class="carousel-cell">
                <img src={item.image} class="img"/>
                <div class="name">
                  {item.text}
                </div>
                </div>
      )
    });

    const getWrapper = this.forWrapper.map((item) => {
      return (
        <div class="row">
          <div class="col-md-6">
            <div class="text">
              <div class="text-1 animate__animated animate__fadeInUp wow fadeInUp">
                <h1>
                  <span class="text-1-1" onClick={() => this.clickWrapperTitle.emit('WrapperTitle')}>{item.titl}</span>
                </h1>
              </div>
              <div class="text-2">
                <p class="text-2" onClick={() => this.clickWrapperSubTitle.emit('WrapperSubTitle')}>{item.subtitl}</p>
              </div>
            </div>
            <div class="main-carousel" data-flickity='{ "cellAlign": "right", "contain": true }'>
              <div class="carousel" data-flickity='{ "autoPlay": true }'>
                {getCarousel}
              </div>
            </div>
            <div class="text-3">
              <h3 class="text-3" onClick={() => this.clickWrapperText.emit('WrapperText')}>{item.text} </h3>
            </div>
            <div class="images">
              <img src={item.AppImage} class="image" onClick={() => this.clickWrapperAppImage.emit('WrapperAppImage')}/>
              <img src={item.GoogleImage} class="image" onClick={() => this.clickWrapperGoogleImage.emit('WrapperGoogleImage')}/>
            </div>
            <div class="subtext" onClick={() => this.clickWrapperSubText.emit('WrapperSubText')}>
              {item.subtext }
            </div>
            <div class="image-1">
              <img src={item.ProductImage} class="image-1-1" onClick={() => this.clickWrapperProductImage.emit('WrapperProductImage')}/>
            </div>
          </div>
          <div class="col-md-6 animate__animated animate__fadeInUp wow fadeInUp">
            <img src={item.PhoneImage} class="image-2" onClick={() => this.clickWrapperPhoneImage.emit('WrapperPhoneImage')}/>
          </div>
        </div>
      )
    });
    return (
      <div class="wrapper">
        <div class="container">
          {getWrapper}
        </div>
      </div>
    );
  }

}
