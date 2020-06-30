import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-tell',
  styleUrl: 's-tell.css',
  shadow: false,
  scoped: true,
})
export class STell implements ComponentInterface {
  @Prop() forTell: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: STell[] = []

  /**
   * Клик по title
   */
  @Event() clickTellTitle: EventEmitter

  /**
   * Клик по тексту
   */
  @Event() clickTellText: EventEmitter

  /**
   * Клик по subtext
   */
  @Event() clickTellSubText: EventEmitter

  /**
   * Клик по AppImage
   */
  @Event() clickTellAppImage: EventEmitter

  /**
   * Клик по GoogleImage
   */
  @Event() clickTellGoogleImage: EventEmitter
  render() {
    const getTell = this.forTell.map((item) => {
      return (
        <div class="row">
          <div class="col-12 animate__animated animate__fadeInUp wow fadeInUp">
            <div class="text">
              <div class="text-1" onClick={() => this.clickTellTitle.emit('TellTitle')}>
               {item.titl}
              </div>
              <div class="text-2" onClick={() => this.clickTellText.emit('TellText')}>
                {item.text}
              </div>
              <div class="subtext" onClick={() => this.clickTellSubText.emit('TellSubText')}>
                {item.subtext}
              </div>
              <div class="images">
                <img src={item.AppImage} class="image" onClick={() => this.clickTellAppImage.emit('TellAppImage')}/>
                <img src={item.GoogleImage} class="image" onClick={() => this.clickTellGoogleImage.emit('TellGoogleImage')}/>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
     <div class="tell">
       <div class="container">
         {getTell}
       </div>
     </div>
    );
  }

}
