import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-input',
  styleUrl: 's-input.css',
  shadow: false,
  scoped: true,
})
export class SInput implements ComponentInterface {
  @Prop() forInput: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SInput[] = []

  /**
   * Клик по кнопке
   */
  @Event() clickInputButton: EventEmitter

  /**
   * Клик по Input
   */
  @Event() clickInput: EventEmitter

  /**
   * Клик по тексту
   */
  @Event() clickInputText: EventEmitter

  render() {
    const getInput = this.forInput.map((item) => {
      return (
        <div class="row justify-content-end animate__animated animate__fadeInUp wow fadeInUp">
          <div class="col-md-6 d-flex">
            <div class="btn">
              <button class="btn1" onClick={() => this.clickInputButton.emit('InputButton')}>{item.button}</button>
            </div>
            <div class="subscribe">
            <input type="text" placeholder="Enter your email to get updates" class="input" onClick={() => this.clickInput.emit('Input')}/>
          </div>
          </div>
            <div class="col-md-6">
            <div class="text" onClick={() => this.clickInputText.emit('InputText')}>
              {item.text}
            </div>
            </div>
        </div>
      )
    });
    return (
        <div class="container">
          {getInput}
        </div>
    );
  }

}
