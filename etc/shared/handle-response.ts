const Res = (res: any, data: any) => res.status(200).send(data);
const Err = (res: any, err: any) => res.status(500).send(err);

export const handleResponse = { Res, Err };