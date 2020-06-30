import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-header',
  styleUrl: 's-header.css',
  shadow: false,
  scoped: true,
})
export class SHeader implements ComponentInterface {
  @Prop() forHeader: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SHeader[] = []

  /**
   * Клип по картинке
   */
  @Event() clickHeaderImage: EventEmitter;

  /**
   * Клип по sign up
   */
  @Event() clickHeaderSignUp: EventEmitter;

  /**
   * Клип по slog in
   */
  @Event() clickHeaderLogIn: EventEmitter;

  render() {
    const getHeader = this.forHeader.map((item) => {
      return (
        <div class="row">
          <div class="col-6 text-left">
            <div class="url">
              <img src={item.image} class="image" onClick={() => this.clickHeaderImage.emit('HeaderImage')}/>
            </div>
          </div>
          <div class="col-6 text-right">
            <div class="text">
            <span class="sign" onClick={() => this.clickHeaderSignUp.emit('HeaderSignUp')}>
              Sign Up
            </span>
            <span class="log" onClick={() => this.clickHeaderLogIn.emit('HeaderLogIn')}>
              Log In
            </span>
          </div>
          </div>
        </div>
      )
    });
    return (
      <div class="header">
        <div class="container">
          {getHeader}
        </div>
      </div>
    );
  }
}
