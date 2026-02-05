import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const googleAppsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
        if (!googleAppsScriptUrl) {
            return NextResponse.json(
                { error: 'Configuration error' },
                { status: 500 }
            );
        }

        const response = await fetch(googleAppsScriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to submit RSVP');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('RSVP error:', error);
        return NextResponse.json(
            { error: 'Failed to process RSVP' },
            { status: 500 }
        );
    }
}
