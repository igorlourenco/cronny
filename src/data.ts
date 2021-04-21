export const plans = [
  {
    order: 'first',
    title: 'Iniciante',
    price: 0,
    attributes: [
      {
        description: '1 projeto',
        isActiveToPlan: true
      },
      {
        description: 'Estatísticas dos projetos',
        isActiveToPlan: false
      }
    ],
    buttonTitle: 'Comece agora'
  },
  {
    order: 'second',
    title: 'Profissional',
    price: 15,
    attributes: [
      {
        description: 'até 5 projetos',
        isActiveToPlan: true
      },
      {
        description: 'Estatísticas dos projetos',
        isActiveToPlan: true
      }
    ],
    buttonTitle: '7 dias grátis'
  },
  {
    order: 'third',
    title: 'Time',
    price: 30,
    attributes: [
      {
        description: 'Projetos ilimitados',
        isActiveToPlan: true
      },
      {
        description: 'Estatísticas dos projetos',
        isActiveToPlan: true
      }
    ],
    buttonTitle: '7 dias grátis'
  }
]
