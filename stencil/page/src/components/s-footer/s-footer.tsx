import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-footer',
  styleUrl: 's-footer.css',
  shadow: false,
  scoped: true,
})
export class SFooter implements ComponentInterface {
  @Prop() forFooter: any;

  /**
   * Приём данных из массива для вывода
   */
  @Prop() intro: SFooter[] = []

  /**
   * Клик по text
   */
  @Event() clickFooterText: EventEmitter

  /**
   * Клик по privacy
   */
  @Event() clickFooterPrivacy: EventEmitter

  /**
   * Клик по text
   */
  @Event() clickFooterSupport: EventEmitter

  /**
   * Клик по subtext
   */
  @Event() clickFooterSubText: EventEmitter


  render() {
    const getFooter= this.forFooter.map((item) => {
      return (
        <div class="row justify-content-start d-flex">
         <div class="col-md-auto">
           <div class="text" onClick={() => this.clickFooterText.emit('FooterText')}>{item.button}
            {item.text}
           </div>
         </div>
          <div class="col-md-auto">
            <div class="text" onClick={() => this.clickFooterPrivacy.emit('FooterPrivacy')}>
            {item.privacy}
            </div>
          </div>
          <div class="col-md-auto">
            <div class="text" onClick={() => this.clickFooterSupport.emit('FooterSupport')}>
            {item.support}
            </div>
          </div>
          <div class="col-12">
            <div class="foo" onClick={() => this.clickFooterSubText.emit('FooterSubText')}>
              {item.subtext}
          </div>
          </div>
        </div>
      )
    });
    return (
     <div class="footer">
       <div class="container">
         {getFooter}
       </div>
     </div>
    );
  }

}
