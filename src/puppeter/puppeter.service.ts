import { Injectable } from '@nestjs/common';

import type { Browser } from 'puppeteer';
import { InjectBrowser } from 'nest-puppeteer';


@Injectable()
export class PuppeterService {
    constructor(@InjectBrowser() private readonly browser: Browser) { }

    async cTWorks() {
        const page = await this.browser.newPage();
        await page.goto('https://www.computrabajo.com/');
        await page.type('#searchText', 'aqui estouy buscando a kinverly');
        await page.click('button.b_primary')
        // await page.waitForSelector('[div article]')
        await page.screenshot({ path: 'C:/Users/USUARIO/Desktop/TET/kinverly.jpg' })
    }
}
