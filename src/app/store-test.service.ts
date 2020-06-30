import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  forWelcome = [
    {
      id: 1,
      image: 'https://techcrunch.com/wp-content/uploads/2014/09/product-hunt.png?w=80&crop=1',
      titl: 'Welcome product hunter! We ♥ you',
      text: 'Sign up today and get immediate access with the invite code “PH2020”'
    }
  ];

  forHeader = [
    {
      id: 1,
      image: 'https://page.fyi/wp-content/themes/page/img/logo.svg',
      titl: 'Sing Up',
      text: 'Log in',
    }
  ];

  forWrapper = [
    {
      id: 1,
      titl: 'Grow your audience',
      subtitl: 'Your page for social, personal or business links & connections',
      text: 'Get the app',
      AppImage: 'https://page.fyi/wp-content/themes/page/img/app_store_mocha.png',
      GoogleImage: 'https://page.fyi/wp-content/themes/page/img/play_store_mocha.png',
      subtext: 'We are featured on ProductHunt!',
      ProductImage: 'https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=201254&theme=light&period=daily',
      PhoneImage: 'https://storage.workestra.com/wp-content/uploads/sites/15/2020/06/03220428/page_social-scaled.jpg'
    }
  ];

  forCreate = [
    {
      id: 1,
      image: 'https://storage.workestra.com/wp-content/uploads/sites/15/2020/06/03220413/page_social_profile-scaled.jpg',
      image1: 'https://storage.workestra.com/wp-content/uploads/sites/15/2020/06/03220355/icons_hover.png',
      titl: 'Create once. Use anywhere',
      text: 'In your Insta and Twitter bio. Build your brand',
      subtext: 'Use it to share your passion, ideas, products, news or business.',
      text1: 'Connect more. Use it as your business card',
      subtext1:  'Use it over text or on the go when you meet people',
      text2: 'Look your best. Beautiful looks, instant shares',
      subtext2: 'No design skills needed! Just enter your info and share it with your followers and customers'
    }
  ];

  forTell = [
    {
      id: 1,
      titl: 'Tell the world your story',
      text: 'Start making your free Page',
      subtext: 'Get the app',
      AppImage: 'https://page.fyi/wp-content/themes/page/img/app_store_mocha.png',
      GoogleImage: 'https://page.fyi/wp-content/themes/page/img/play_store_mocha.png',
    }
  ];

  forInput = [
    {
      id: 1,
      button: 'Subscribe',
      text: 'By submitting your email, you agree to receive product updates about Page. You can unsubscribe anytime. For more information about our privacy policies, please visit our help center'
    }
  ];

  forFooter = [
    {
      id: 1,
      text: 'Terms of Service',
      privacy: 'Privacy Policy',
      support: 'Support',
      subtext: '© 2020 Page Inc.'
    }
  ];

  forCarousel = [
    {id: 1, image: 'https://storage.workestra.com/public/profilepicPtBK5remilsiWBeoA3POWw1M5rBR3lXYR7PyFfN01590661184-450x450_thumb.jpg', text: '@candas'},
    {id: 2, image: 'https://storage.workestra.com/public/profilepic2h3uCmDnGf9WXddeEImkZ21SuHBtvp1bMCwtCfxr1590505368-450x450_thumb.jpg', text: '@scarlenn'},
    {id: 3, image: 'https://storage.workestra.com/public/profilepiceVQENfk6W2Jp6PDZIX3sVKv5tmRFxuk12psxQyQq1590495183-450x450_thumb.jpg', text: '@fab'},
    {id: 4, image: 'https://storage.workestra.com/public/profilepicofgyUDSzhI35rKbLgE4ke1dZbeMtIWTI5rGbZxSB1590475422-450x450_thumb.jpg', text: '@Ophelie'},
    {id: 5, image: 'https://storage.workestra.com/public/profilepicvF0I9ESo5adjxTGnVswxXtWaEMZt1U5vLnuooheZ1590449644-450x450_thumb.jpg', text: '@achronicvoice'},
    {id: 6, image: 'https://storage.workestra.com/public/profilepichekFuDS7sHgLROveloFxPOjcujwOJgKPqiP5nrGl1590089820-450x450_thumb.jpg', text: '@sharnacious'},
    {id: 7, image: 'https://storage.workestra.com/public/profilepicpfmBnpQJemXTPq3XPwXVMKjUYDTXNgMjSlLlhWKy1589986049-450x450_thumb.jpg', text: '@CoachRyan'},
  ]


  constructor() { }
}
