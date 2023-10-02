// app/api/kindeSession/route.ts

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {NextResponse} from "next/server";

export async function GET() {
    const {getUser, isAuthenticated, getPermissions, getOrganization} = getKindeServerSession();
    const user = await getUser();
    const authenticated = await isAuthenticated();
    const permissions = await getPermissions();
    const organization = await getOrganization();

    return NextResponse.json({user, authenticated, permissions, organization});
}