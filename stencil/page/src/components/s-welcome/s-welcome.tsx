import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-welcome',
  styleUrl: 's-welcome.css',
  shadow: false,
  scoped: true,
})
export class SWelcome implements ComponentInterface {

  @Prop() forWelcome: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SWelcome[] = []

  /**
   * Клик по картинке
   */
  @Event() clickWelcomeImage: EventEmitter;

  /**
   * Клик по тексту
   */
  @Event() clickWelcomeTitle: EventEmitter;

  /**
   * Клик по под тексту
   */
  @Event() clickWelcomeText: EventEmitter;

  render() {
    const getWelcome = this.forWelcome.map((item) => {
      return (
        <div class="row">
          <div class="col-12">
            <div class="url">
              <img src={item.image} onClick={() => this.clickWelcomeImage.emit('WelcomeImage')}/>
            </div>
          </div>
          <div class="col-12">
            <div class="text">
              <div class="text-1" onClick={() => this.clickWelcomeTitle.emit('WelcomeTitle')}>
                <h4>{item.titl}</h4>
              </div>
              <div class="text-2" onClick={() => this.clickWelcomeText.emit('WelcomeText')}>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div class="welcome">
        <div class="container">
          {getWelcome}
        </div>
      </div>
    );
  }

}
