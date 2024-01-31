import create from 'zustand'

export const useStore = create(
    (set) => ({
        // cart
        cart : {
            pizzas: []
        },

        // adding pizza to the cart

    addPizza: (data)=> 
    set((state)=> ({
        cart: {
            pizzas: [...state.cart.pizzas, data]
        }
    })),


    // remove pizza
    removePizza : (index)=>
    set((state)=> ({
        cart: {
            pizzas : state.cart.pizzas.filter((_,i)=> 1 !=index)
        }
    }))
        
    })
)