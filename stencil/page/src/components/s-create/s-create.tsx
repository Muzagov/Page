import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-create',
  styleUrl: 's-create.css',
  shadow: false,
  scoped: true,
})
export class SCreate implements ComponentInterface {
  @Prop() forCreate: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SCreate[] = []

  /**
   * Клик по картинке
   */
  @Event() clickCreateImage: EventEmitter;

  /**
   * Клик по позиционированной картинке
   */
  @Event() clickCreatePositionImage: EventEmitter;

  /**
   * Клик по title
   */
  @Event() clickCreateTitle: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickCreateText: EventEmitter;

  /**
   * Клик по subtext
   */
  @Event() clickCreateSubText: EventEmitter;

  /**
   * Клик по второму тексту
   */
  @Event() clickCreateSecondText: EventEmitter;

  /**
   * Клик по второму subtext
   */
  @Event() clickCreateSecondSubText: EventEmitter;

  /**
   * Клик по третьему тексту
   */
  @Event() clickCreateThirdText: EventEmitter;

  /**
   * Клик по третьему subtext
   */
  @Event() clickCreateThirdSubText: EventEmitter;

  render() {
    const getCreate = this.forCreate.map((item) => {
      return (
        <div class="row">
          <div class="col-md-6">
            <div class="images">
            <img src={item.image} class="image" onClick={() => this.clickCreateImage.emit('CreateImage')}/>
            <span class="animate__animated animate__fadeInUp wow fadeInUp">
            <img src={item.image1} class="image1" onClick={() => this.clickCreatePositionImage.emit('CreatePositionImage')}/>
            </span>
          </div>
          </div>
          <div class="col-md-6 animate__animated animate__fadeInUp wow fadeInUp">
            <div class="text">
              <div class="title" onClick={() => this.clickCreateTitle.emit('CreateTitle')}>
                {item.titl}
              </div>
              <div class="text-1">
                <h3 class="text-1" onClick={() => this.clickCreateText.emit('CreateText')}>{item.text}</h3>
              </div>
              <div class="subtext" onClick={() => this.clickCreateSubText.emit('CreateSubText')}>
                <p>{item.subtext}</p>
              </div>
              <div class="text-2" onClick={() => this.clickCreateSecondText.emit('CreateSecondText')}>
                {item.text1}
              </div>
              <div class="subtext-2" onClick={() => this.clickCreateSecondSubText.emit('CreateSecondSubText')}>
                <p>{item.subtext1}</p>
              </div>
              <div class="text-3" onClick={() => this.clickCreateThirdText.emit('CreateThirdText')}>
                {item.text2}
              </div>
              <div class="subtext-3" onClick={() => this.clickCreateThirdSubText.emit('CreateThirdSubText')}>
                <p>{item.subtext2}</p>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
     <div class="create">
       <div class="container">
         {getCreate}
       </div>
     </div>
    );
  }

}
