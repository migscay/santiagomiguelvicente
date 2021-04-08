import { Dish } from './dish';

export const DISHES: Dish[] = [
    {
      id: 0,
      name: 'Palabok',
      image: '/assets/images/palabok.png',
      category: 'mains',
      label: 'Hot',
      price: '4.99',
      featured: true,
      // tslint:disable-next-line:max-line-length
      description: 'Rice noodle topped with thickened prawn bisque sauce layered with pan seared prawns sliced boiled eggs smoked fish spring onions and crushed chicharon.',
    },
    {
      id: 1,
      name: 'Kare-kare',
      image: '/assets/images/Kare-kare.jpg',
      category: 'mains',
      label: '',
      price: '1.99',
      featured: false,
      description: 'Crispy beef Kate kare-  slow cooked braised beef in peanut sauce with tempura aubergine,snake beans, bokchoi  And sauteed shrimp paste on the side',
    },
    {
      id: 2,
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      label: 'New',
      price: '1.99',
      featured: false,
      description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    },
    {
      id: 3,
      name: 'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      label: '',
      price: '2.99',
      featured: false,
      description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    }
  ];
  