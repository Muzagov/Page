import {Component, h,} from '@stencil/core';
import {
  forCarousel,
  forCreate,
  forFooter,
  forHeader,
  forInput,
  forTell,
  forWelcome,
  forWrapper
} from "../../utils/mock";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {
  render() {
    const clicker = item => {
      console.log(item);
    }
    return (
      <div>
        <s-welcome forWelcome={forWelcome}
                   onClickWelcomeImage={(item) => clicker(item)}
                   onClickWelcomeTitle={(item) => clicker(item)}
                   onClickWelcomeText={(item) => clicker(item)}/>
        <s-header forHeader={forHeader}
                  onClickHeaderImage={(item) => clicker(item)}
                  onClickHeaderSignUp={(item) => clicker(item)}
                  onClickHeaderLogIn={(item) => clicker(item)}/>
        <s-wrapper forWrapper={forWrapper}
                   onClickWrapperTitle={(item) => clicker(item)}
                   onClickWrapperSubTitle={(item) => clicker(item)}
                   onClickWrapperText={(item) => clicker(item)}
                   onClickWrapperGoogleImage={(item) => clicker(item)}
                   onClickWrapperAppImage={(item) => clicker(item)}
                   onClickWrapperSubText={(item) => clicker(item)}
                   onClickWrapperProductImage={(item) => clicker(item)}
                   onClickWrapperPhoneImage={(item) => clicker(item)}
                   forCarousel={forCarousel}/>
        <s-create forCreate={forCreate}
                  onClickCreateImage={(item) => clicker(item)}
                  onClickCreatePositionImage={(item) => clicker(item)}
                  onClickCreateTitle={(item) => clicker(item)}
                  onClickCreateText={(item) => clicker(item)}
                  onClickCreateSubText={(item) => clicker(item)}
                  onClickCreateSecondText={(item) => clicker(item)}
                  onClickCreateSecondSubText={(item) => clicker(item)}
                  onClickCreateThirdText={(item) => clicker(item)}
                  onClickCreateThirdSubText={(item) => clicker(item)}/>
        <s-tell forTell={forTell}
                onClickTellTitle={(item) => clicker(item)}
                onClickTellText={(item) => clicker(item)}
                onClickTellSubText={(item) => clicker(item)}
                onClickTellAppImage={(item) => clicker(item)}
                onClickTellGoogleImage={(item) => clicker(item)}/>
        <s-input forInput={forInput}
                 onClickInputButton={(item) => clicker(item)}
                 onClickInput={(item) => clicker(item)}
                 onClickInputText={(item) => clicker(item)}/>
        <s-footer forFooter={forFooter}
                  onClickFooterText={(item) => clicker(item)}
                  onClickFooterPrivacy={(item) => clicker(item)}
                  onСlickFooterSupport={(item) => clicker(item)}
                  onСlickFooterSubText={(item) => clicker(item)}/>
      </div>
    )
  }
}
