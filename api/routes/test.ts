import { Router, Request, Response } from "express";

const router: Router = Router();

router.post("/test", (_req: Request, res: Response) => {
  try {
    interface PayloadFormat {
      message: string;
    }

    const payload: PayloadFormat = {
      message: "Hi",
    };

    return res.status(200).json(payload);
  } catch (e) {
    console.error(e);
    return res.status(500).json();
  }
});

router.get("/test", (_req: Request, res: Response) => {
  try {
    interface PayloadFormat {
      message: string;
    }

    const payload: PayloadFormat = {
      message: "Hi",
    };

    return res.status(200).json(payload);
  } catch (e) {
    console.error(e);
    return res.status(500).json();
  }
});

export default router;
