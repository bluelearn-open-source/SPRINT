const Named = () => {
	return (
		<div
			style={{
				marginLeft: "auto",
				marginRight: "auto",
                marginTop:"15vh",
			}}
		>
			<div
				style={{
					display: "inline-flex",
					flexDirection: "row",
					alignItems: "flex-start",
					justifyContent: "flex-start",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "flex-start",
						justifyContent: "flex-start",
                        margin:"0px"

					}}
				>
					<p
						style={{
							fontSize: 32,
							// lineHeight: "100%",
							color: "rgba(61, 90, 254, 1)",
                        margin:"0px"

						}}
					>
						blue
					</p>
					<p
						style={{
							fontSize: 32,
							// lineHeight: "100%",
							color: "white",
                        margin:"0px"

						}}
					>
						learn
					</p>
				</div>
				<div style={{ width: 8 }} />
				<p
					style={{
						fontSize: 32,
						alignSelf: "center",
						lineHeight: "100%",
						color: "white",
                        margin:"0px"

					}}
				>
					x
				</p>
				<div style={{ width: 8 }} />
				<p
					style={{
						fontSize: 32,
						// lineHeight: "100%",
						color: "rgba(254, 108, 62, 1)",
                        margin:"0px"
					}}
				>
					OpenSauce
				</p>
			</div>
			<p
				style={{
					fontSize: 40,
					fontStyle: "italic",
					// lineHeight: "%",
					color: "white",
					textAlign:"center",
                    margin:"5vh"

				}}
			>
				SPRINT
			</p>
		</div>
	);
};
export default Named;
