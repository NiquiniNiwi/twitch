import React, { useState } from "react"
import { Box, Button, HStack, Text } from "@chakra-ui/react"
import { Year2020 } from "../../Molecules/2020"
import { Year2022 } from "../../Molecules/2022"
import { Year2021 } from "../../Molecules/2021"

export const Display: React.FC = () => {
	const [state20, setState20] = useState(false)
	const [state21, setState21] = useState(false)
	const [state22, setState22] = useState(false)
	return (
		<Box>
			<Text fontSize="48px">
                Graficos de Visualização
			</Text>
			<HStack marginBottom="10px">
				<Box>
					<Button
						bg="#4c98fa"
						borderRadius="15px"
						_hover={
							state20 ?
								{
									bg: "#f90606"
								} :
								{
									bg: "#2bf906"
								}
						}
						onClick={() => { setState20(!state20)}}
					>
						<Text w="150px">
							{state20 ? "Remover" : "Mostrar"} grafico 2020
						</Text>
					</Button>
				</Box>
				<Box>
					<Button
						bg="#4c98fa"
						borderRadius="15px"
						_hover={
							state21 ?
								{
									bg: "#f90606"
								} :
								{
									bg: "#2bf906"
								}
						}
						onClick={() => { setState21(!state21)}}
					>
						<Text w="150px">
							{state21 ? "Remover" : "Mostrar"} grafico 2021
						</Text>
					</Button>
				</Box>
				<Box>
					<Button
						bg="#4c98fa"
						borderRadius="15px"
						_hover={
							state22 ?
								{
									bg: "#f90606"
								} :
								{
									bg: "#2bf906"
								}
						}
						onClick={() => { setState22(!state22)}}
					>
						<Text w="150px">
							{state22 ? "Remover" : "Mostrar"} grafico 2022
						</Text>
					</Button>
				</Box>
			</HStack>
			{state20 && (<Year2020/>)}
			{state21 && (<Year2021/>)}
			{state22 && (<Year2022/>)}
		</Box>

	)
}