import { CircularProgress, Stack } from "@mui/material";

type Props = {
    show: Boolean;
    children: any;
}

export function Spinner({ show, children }: Props) {

    return (
        <>
            {
                show ?
                    <Stack alignItems="center">
                        <CircularProgress color='secondary' size={100} />
                    </Stack> :
                children
            }
        </>
    )
}