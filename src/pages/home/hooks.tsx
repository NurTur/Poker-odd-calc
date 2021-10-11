// import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { selectProduct, selectPartner } from '@/actions/home'
// import { products } from 'src/utils/helpers/home'

// export const useHome = () => {
//   const { product } = useSelector((state) => state.home)
//   const dispatch = useDispatch()

//   const [isSulpak, setIsSulpak] = useState(false)
//   const [disabled, setDisabled] = useState(false)

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search)
//     const value = params.get('product')

//     if (value) {
//       dispatch(selectProduct(products.find((prod) => prod.id === value)))
//       setDisabled(true)
//     }
//   }, [])

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search)
//     const partner = params.get('partner')

//     if (product && partner) dispatch(selectPartner(partner))
//     if (partner === 'SULPAK') setIsSulpak(true)
//     else setIsSulpak(false)
//   }, [product])

//   return {
//     isSulpak,
//     disabled,
//   }
// }
