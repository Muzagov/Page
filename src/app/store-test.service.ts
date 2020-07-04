import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTestService {

  forWelcome = [
    {
      id: 1,
      image: 'product-hunt.png',
      titl: 'Welcome product hunter! We ♥ you',
      text: 'Sign up today and get immediate access with the invite code “PH2020”'
    }
  ];

  forHeader = [
    {
      id: 1,
      image: 'logo.svg',
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
      AppImage: 'app_store_mocha.png',
      GoogleImage: 'play_store_mocha.png',
      subtext: 'We are featured on ProductHunt!',
      ProductImage: 'top-post-badge.svg',
      PhoneImage: 'page_social-scaled.jpg'
    }
  ];

  forCreate = [
    {
      id: 1,
      image: 'page_social_profile-scaled.jpg',
      image1: 'icons_hover.png',
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
      AppImage: 'app_store_mocha.png',
      GoogleImage: 'play_store_mocha.png',
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
    {id: 1, image: 'image-1.jpg', text: '@candas'},
    {id: 2, image: 'image-2.jpg', text: '@scarlenn'},
    {id: 3, image: 'image-3.jpg', text: '@fab'},
    {id: 4, image: 'image-4.jpg', text: '@Ophelie'},
    {id: 5, image: 'image-5.jpg', text: '@achronicvoice'},
    {id: 6, image: 'image-6.jpg', text: '@sharnacious'},
    {id: 7, image: 'image-7.jpg', text: '@CoachRyan'},
  ]


  constructor() { }
}
