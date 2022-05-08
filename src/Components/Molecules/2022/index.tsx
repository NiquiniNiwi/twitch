import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip } from "recharts"
import { data2022 } from "../../Atoms/variables/2022/charts"



export const Year2022: React.FC = () => {

	return (
		<Box bg="white" w="1500px" marginBottom="10px">
			<Text fontSize="32px" marginLeft="500px">
                Horas assistidas em milhões
			</Text>
			<LineChart width={1500} height={250} data={data2022} 
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="JUST CHATTING" stroke="#0426ae" />
				<Line type="monotone" dataKey="LEAGUE OF LEGENDS" stroke="#04aeab" />
				<Line type="monotone" dataKey="GRAND THIEF AUTO V" stroke="#10ae04" />
				<Line type="monotone" dataKey="VALORANT" stroke="#aea804" />
				<Line type="monotone" dataKey="FORTINITE" stroke="#ae2104" />
				<Line type="monotone" dataKey="CS: GO" stroke="#a604ae" />
			</LineChart>
		</Box>
	)
}