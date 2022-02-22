import { Button, Collapsible, Box, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from "react";


const SideBar = ({ showSidebar, size, setShowSidebar }) => {
    return (
        <>
            {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                        flex
                        width='medium'
                        background='light-2'
                        elevation='small'
                        align='center'
                        justify='center'
                    >
                        Sidebar Tab
                    </Box>
                </Collapsible>
            ) : (
                <Layer>
                    <Box
                        background='light-2'
                        tag='header'
                        justify='end'
                        align='center'
                        direction='row'
                    >
                        <Button
                            icon={<FormClose />}
                            onClick={() => setShowSidebar(false)}
                        />
                    </Box>
                    <Box
                        fill
                        background='light-2'
                        align='center'
                        justify='center'
                    >
                        sidebar
                        
                    </Box>
                </Layer>
            )}
        </>
    )
}

export default SideBar