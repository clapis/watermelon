export const state = () => {
  return {
    all: [
      {
        id: 0,
        price: 0,
        name: "Free",
        description: "Free listing for 30 days"
      },
      {
        id: 1,
        price: 199,
        name: "Featured",
        sku: "sku_H5GPooXiU7IeZe",
        description: "Highlight your listing for 45 days",
      },
      {
        id: 2,
        price: 399,
        name: "Premium",
        sku: "sku_premium",
        description:
          "Your listing will be highlighted and ranked high over standard listings for 90 days",
        disabled: true
      }
    ],
    default: 1
  }
}

export const getters = {
  id: (state) => (id) => state.all.find(p => p.id === id)
}