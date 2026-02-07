# GitHub Codespaces Kullanım Rehberi (Turkish)

## Codespaces Bütçesi ve Kullanımı

Eğer aylık ücretsiz kullanımınızı tükettiyseniz veya Codespaces bütçenizi aştıysanız, işte çözümleriniz:

### Seçenek 1: Codespaces Bütçenizi Artırın

1. **Kişisel Hesaplar İçin:**
   - [GitHub Ayarlar > Billing & Plans > Spending Limits](https://github.com/settings/billing) sayfasına gidin
   - "Codespaces" bölümünde harcama limitinizi ayarlayın
   - İhtiyaçlarınıza uygun bir aylık bütçe belirleyin
   - GitHub kişisel hesaplar için ayda 120 çekirdek saat ücretsiz sunar

2. **Organizasyon Hesapları İçin:**
   - Organizasyonunuzun faturalama ayarlarına gidin
   - Codespaces bütçesini artırmak için organizasyon yöneticinizle iletişime geçin
   - Organizasyon sahipleri `https://github.com/organizations/ORGANIZASYON_ADI/settings/billing` adresinden harcama limitlerini yönetebilir

### Seçenek 2: Yerel Olarak Geliştirme Yapın (Codespaces Olmadan)

Kendi bilgisayarınızda geliştirme yapmaya devam edebilirsiniz:

#### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn paket yöneticisi

#### Kurulum Adımları

1. **Depoyu klonlayın:**
   ```bash
   git clone https://github.com/LabJanus/designSystem.git
   cd designSystem
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme modunu başlatın:**
   ```bash
   npm run dev
   ```
   Bu komut değişiklikleri izler ve CSS'inizi otomatik olarak yeniden oluşturur.

4. **Çalışmanızı önizleyin:**
   ```bash
   npm run serve
   ```
   Ardından tarayıcınızda http://localhost:3000 adresini açın.

5. **Production için derleyin:**
   ```bash
   npm run build:prod
   ```

### Seçenek 3: Codespaces Kullanımınızı Optimize Edin

Ücretsiz katman içinde kalmak için Codespaces kullanımınızı azaltın:

1. **Kullanmadığınızda Codespaces'i durdurun:**
   - Codespaces varsayılan olarak 30 dakika hareketsizlikten sonra otomatik olarak durur
   - GitHub Codespaces panosundan Codespace'inizi manuel olarak durdurun
   - CLI'dan durdurmak için `gh codespace stop` komutunu kullanın

2. **Daha küçük makine türleri kullanın:**
   - Varsayılan 2 çekirdekli makineler daha az saat kullanır
   - 4 çekirdekli makineler 2x kullanım sayılır
   - 8 çekirdekli makineler 4x kullanım sayılır

3. **Kullanımınızı takip edin:**
   - https://github.com/settings/billing adresinden kullanımınızı kontrol edin
   - Harcama limiti uyarıları ayarlayın
   - Sürprizlerden kaçınmak için kullanımı düzenli olarak gözden geçirin

4. **Kullanılmayan Codespaces'leri silin:**
   - Eski veya terk edilmiş Codespaces'leri kaldırın
   - https://github.com/codespaces adresine gidin
   - Artık kullanmadığınız Codespaces'leri silin

### Seçenek 4: Alternatif Bulut Geliştirme Ortamları Kullanın

Bütçenizi artırmayı tercih etmiyorsanız, bu alternatifleri düşünün:

- **Gitpod**: Ayda 50 saat ücretsiz sunar
- **StackBlitz**: Tarayıcı tabanlı ücretsiz geliştirme
- **CodeSandbox**: Ücretsiz katman mevcut
- **Yerel Geliştirme**: Ücretsiz ve sınırsız (yukarıdaki Seçenek 2'ye bakın)

## Sık Sorulan Sorular

**S: Codespaces ne kadar tutar?**
C: GitHub kişisel hesaplar için 120 çekirdek saat ücretsiz sunar. Bundan sonra fiyatlandırma makine türüne göre değişir. Detaylar için [GitHub Pricing](https://github.com/pricing) sayfasına bakın.

**S: Otomatik olarak ücretlendirilecek miyim?**
C: Sadece harcama limitinizi 0$'ın üzerine çıkarırsanız. Varsayılan olarak, ücretsiz limiti aştığınızda Codespaces çalışmayı durdurur.

**S: Bu proje üzerinde Codespaces olmadan çalışmaya devam edebilir miyim?**
C: Evet! Tam kurulum talimatları için yukarıdaki "Seçenek 2: Yerel Olarak Geliştirme Yapın" bölümüne bakın.

**S: Mevcut kullanımımı nasıl kontrol ederim?**
C: Mevcut Codespaces kullanımınızı ve harcamanızı görmek için https://github.com/settings/billing adresini ziyaret edin.

## Daha Fazla Yardım

- [GitHub Codespaces Belgeleri](https://docs.github.com/en/codespaces)
- [Codespaces Faturalandırma](https://docs.github.com/en/billing/managing-billing-for-github-codespaces)
- Projeye özgü sorular için bu depoda bir issue açın

---

For English version, see [CODESPACES.md](./CODESPACES.md)
